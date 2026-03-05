import Stripe from 'stripe';
import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { Resend } from 'resend';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const resend = new Resend(process.env.RESEND_API_KEY);

async function generatePenduleResponse(questions: string[], prenom: string, dateNaissance: string): Promise<string> {
  const prenomText = prenom ? `Le consultant s'appelle ${prenom}.` : '';
  const dateText = dateNaissance ? `Sa date de naissance est le ${dateNaissance}.` : '';
  const contextConsultant = (prenomText || dateText) ? `\n\n${prenomText} ${dateText} Utilise son prénom pour personnaliser ta réponse et sa date de naissance pour enrichir tes interprétations avec des références astrologiques adaptées à son signe.\n` : '';

  const prompt = `Tu es Sélène, une voyante mystique et bienveillante qui utilise un pendule cristal pour répondre aux questions de l'âme.${contextConsultant}

Réponds à chacune des questions suivantes avec :
- La réponse du pendule : OUI ou NON
- Une explication mystique et enveloppante de 2-3 phrases, avec des références aux énergies, aux astres ou aux guides spirituels

Format pour chaque question :
🔮 Question [numéro] : [la question]
Le pendule a [vibré/oscillé/tourné]... ✨ **[OUI/NON]**
[Explication mystique de 2-3 phrases]

Questions :
${questions.map((q, i) => `${i + 1}. ${q}`).join('\n')}

Sois chaleureuse, mystique et rassurante. Utilise un langage poétique.`;

  const message = await anthropic.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 1024,
    messages: [{ role: 'user', content: prompt }],
  });

  return (message.content[0] as { text: string }).text;
}

function buildEmailHtml(response: string, questions: string[], prenom: string): string {
  const responseHtml = response
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br>');

  return `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#0a0518;">
  <div style="background:#0a0518;color:#e2d9f3;font-family:Georgia,serif;padding:40px 20px;max-width:600px;margin:0 auto;">

    <div style="text-align:center;margin-bottom:32px;">
      <div style="font-size:48px;margin-bottom:16px;">🔮</div>
      <h1 style="color:#d4af37;font-size:28px;margin:0 0 8px;">Votre consultation par pendule</h1>
      <p style="color:#9d8ec0;margin:0;font-style:italic;">Sélène a consulté son pendule pour vous${prenom ? `, ${prenom}` : ''}...</p>
    </div>

    <div style="border:1px solid #2a1f4a;border-radius:12px;padding:32px;background:#110a2a;margin-bottom:24px;">
      <div style="line-height:1.9;font-size:15px;color:#d4c5f9;">
        ${responseHtml}
      </div>
    </div>

    <div style="border:1px solid #2a1f4a;border-radius:12px;padding:20px;background:#0f0820;margin-bottom:24px;">
      <p style="color:#9d8ec0;font-size:13px;margin:0 0 12px;font-weight:bold;">Vos questions :</p>
      ${questions.map((q, i) => `<p style="color:#7c6b9e;font-size:13px;margin:4px 0;">${i + 1}. ${q}</p>`).join('')}
    </div>

    <div style="text-align:center;margin-bottom:24px;">
      <p style="color:#6b5b95;font-style:italic;font-size:15px;">"Que les astres continuent d'éclairer votre chemin."</p>
      <p style="color:#d4af37;font-size:14px;font-weight:bold;">— Sélène ✨</p>
    </div>

    <hr style="border:none;border-top:1px solid #2a1f4a;margin:24px 0;">
    <p style="color:#4a3f6b;font-size:11px;text-align:center;line-height:1.6;">
      Cette consultation est fournie à titre de divertissement et ne se substitue pas à un avis professionnel.<br>
      © 2026 Sélène Voyance — <a href="https://voyance-pendule.fr" style="color:#6b5b95;">voyance-pendule.fr</a>
    </p>
  </div>
</body>
</html>`;
}

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get('stripe-signature');

  if (!sig) return NextResponse.json({ error: 'No signature' }, { status: 400 });

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err) {
    console.error('Webhook signature error:', err);
    return NextResponse.json({ error: 'Webhook error' }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    const email = session.metadata?.email;
    const prenom = session.metadata?.prenom || '';
    const dateNaissance = session.metadata?.dateNaissance || '';
    const questions: string[] = JSON.parse(session.metadata?.questions || '[]');

    if (email && questions.length > 0) {
      const sendAt = new Date(Date.now() + 30 * 60 * 1000); // 30 minutes plus tard

      try {
        const response = await generatePenduleResponse(questions, prenom, dateNaissance);
        await resend.emails.send({
          from: 'Sélène Voyance <contact@voyance-pendule.fr>',
          to: email,
          subject: '🔮 Votre consultation par pendule — Sélène Voyance',
          html: buildEmailHtml(response, questions, prenom),
          scheduledAt: sendAt.toISOString(),
        });
        console.log(`Email programmé dans 30 min pour ${email}`);
      } catch (err) {
        console.error('Erreur génération/envoi:', err);
        // Email de secours si Claude échoue
        await resend.emails.send({
          from: 'Sélène Voyance <contact@voyance-pendule.fr>',
          to: email,
          subject: '🔮 Votre consultation — confirmation de réception',
          html: `
            <div style="background:#0a0518;color:#e2d9f3;font-family:Georgia,serif;padding:40px 20px;max-width:600px;margin:0 auto;">
              <h1 style="color:#d4af37;text-align:center;">Votre consultation a bien été reçue ✨</h1>
              <p>Bonjour${prenom ? ` ${prenom}` : ''},</p>
              <p>Votre paiement a bien été validé et vos questions ont été transmises à Sélène.</p>
              <p>Sélène consultera son pendule pour vous et vous enverra votre réponse personnalisée <strong style="color:#d4af37;">dans les prochaines 24h</strong>.</p>
              <p style="color:#9d8ec0;font-style:italic;">— Sélène ✨</p>
            </div>`,
        });
        console.log(`Email de secours envoyé à ${email}`);
      }
    }
  }

  return NextResponse.json({ received: true });
}
