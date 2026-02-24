import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Horoscope Gratuit du Jour — Tous les signes | Sélène Voyance",
    description: "Consultez votre horoscope gratuit du jour pour les 12 signes du zodiaque. Amour, travail, santé, finances. Prédictions précises par Sélène.",
};

const horoscopes = [
    {
        sign: "Bélier", emoji: "♈", element: "Feu 🔥", dates: "21 mars - 19 avril",
        amour: "Une belle énergie traverse votre vie sentimentale aujourd'hui. Si vous êtes en couple, c'est le moment idéal pour raviver la flamme avec une attention surprise. Célibataire ? Ouvrez les yeux, une rencontre inattendue pourrait se présenter dans votre entourage proche.",
        travail: "Votre dynamisme est contagieux au travail. Un projet qui stagnait va enfin avancer grâce à votre initiative. N'hésitez pas à prendre les devants lors des réunions, vos idées seront bien reçues.",
        sante: "Canalisez votre énergie débordante dans une activité physique. Un bon footing ou une séance de sport vous fera le plus grand bien pour évacuer les tensions accumulées.",
        conseil: "Faites confiance à votre instinct aujourd'hui, il ne vous trompera pas.",
        chancePct: 78,
    },
    {
        sign: "Taureau", emoji: "♉", element: "Terre 🌍", dates: "20 avril - 20 mai",
        amour: "La tendresse est au rendez-vous. Votre partenaire appréciera votre côté protecteur et affectueux. Profitez d'un moment de douceur ensemble. Les célibataires pourraient être séduits par une personne à l'humour irrésistible.",
        travail: "Les finances sont bien aspectées. Un retour sur investissement ou une prime pourrait pointer le bout de son nez. Restez concentré(e) sur vos objectifs à long terme.",
        sante: "Prenez soin de votre gorge et de votre nuque, zones sensibles de votre signe. Un massage ou un bain chaud serait idéal ce soir.",
        conseil: "La patience est votre plus grande force. Continuez à avancer à votre rythme.",
        chancePct: 85,
    },
    {
        sign: "Gémeaux", emoji: "♊", element: "Air 💨", dates: "21 mai - 20 juin",
        amour: "Votre charme opère comme jamais. Les discussions profondes renforcent vos liens. En couple, proposez une sortie culturelle. Célibataire, vos talents de conversation séduisent naturellement.",
        travail: "Journée idéale pour les échanges et la communication. Si vous avez une présentation ou une négociation, vous brillerez. Votre polyvalence est votre atout.",
        sante: "Attention à la nervosité. Accordez-vous des pauses régulières et pratiquez la respiration profonde pour calmer votre mental hyperactif.",
        conseil: "Choisissez une direction et tenez-vous y aujourd'hui. La dispersion est votre seul ennemi.",
        chancePct: 72,
    },
    {
        sign: "Cancer", emoji: "♋", element: "Eau 💧", dates: "21 juin - 22 juillet",
        amour: "Vos émotions sont intenses mais bien canalisées. Un moment de complicité avec votre partenaire renforcera votre lien. Les célibataires pourraient rencontrer quelqu'un dans un cadre familial.",
        travail: "Votre intuition professionnelle est aiguisée. Faites confiance à vos ressentis dans les décisions importantes. Un collègue pourrait avoir besoin de votre soutien.",
        sante: "L'eau est votre alliée aujourd'hui. Hydratez-vous bien et si possible, offrez-vous un moment près de l'eau — bain, piscine ou même une simple promenade au bord de l'eau.",
        conseil: "Protégez votre énergie en vous entourant uniquement de personnes positives.",
        chancePct: 80,
    },
    {
        sign: "Lion", emoji: "♌", element: "Feu 🔥", dates: "23 juillet - 22 août",
        amour: "Vous rayonnez ! Votre magnétisme attire les regards et les cœurs. En couple, votre partenaire tombe sous votre charme à nouveau. Célibataire, vous êtes irrésistible aujourd'hui.",
        travail: "Vous êtes naturellement leader aujourd'hui. Un projet important avance grâce à votre vision. Les postes de responsabilité sont faits pour vous, montrez-le.",
        sante: "Votre vitalité est au top. Profitez-en pour repenser votre routine bien-être et intégrer de nouvelles habitudes saines qui dureront.",
        conseil: "Restez généreux(se) mais n'oubliez pas de penser aussi à vous-même.",
        chancePct: 90,
    },
    {
        sign: "Vierge", emoji: "♍", element: "Terre 🌍", dates: "23 août - 22 sept.",
        amour: "La délicatesse est votre arme secrète en amour aujourd'hui. Les petites attentions comptent plus que les grands gestes. Votre sens du détail touche profondément votre partenaire.",
        travail: "Votre rigueur et votre sens de l'organisation sont vos meilleurs atouts. Un dossier complexe trouve sa solution grâce à votre analyse méticuleuse. Bravo !",
        sante: "Attention à ne pas trop ruminer. La méditation ou le yoga vous aideront à lâcher prise et à trouver la sérénité dont vous avez besoin.",
        conseil: "La perfection n'existe pas. Acceptez l'imperfection et vous trouverez la paix intérieure.",
        chancePct: 75,
    },
    {
        sign: "Balance", emoji: "♎", element: "Air 💨", dates: "23 sept. - 22 oct.",
        amour: "L'harmonie règne dans votre vie sentimentale. Si un conflit persistait, aujourd'hui est le jour idéal pour le résoudre avec diplomatie. Les célibataires sont attirés par les personnes élégantes et cultivées.",
        travail: "Votre sens de la justice et de l'équilibre fait merveille dans les situations délicates au travail. On vous sollicite pour arbitrer, et vous excellez dans ce rôle.",
        sante: "L'équilibre est aussi important pour votre corps. Alternez effort et repos, alimentation gourmande et healthy. L'excès dans un sens ou l'autre vous déstabilise.",
        conseil: "Prenez une décision que vous repoussez depuis trop longtemps. Votre jugement est clair aujourd'hui.",
        chancePct: 82,
    },
    {
        sign: "Scorpion", emoji: "♏", element: "Eau 💧", dates: "23 oct. - 21 nov.",
        amour: "L'intensité est votre marque de fabrique. Aujourd'hui, vos liens affectifs se renforcent par la profondeur de vos échanges. Courage : osez vous dévoiler, la vulnérabilité est une force.",
        travail: "Votre flair détecte une opportunité que les autres ne voient pas. Faites confiance à votre instinct de stratège. Les transformations professionnelles sont favorisées.",
        sante: "Libérez les émotions refoulées. L'écriture, la thérapie ou une conversation profonde avec un(e) ami(e) de confiance vous fera un bien fou.",
        conseil: "Le lâcher-prise est votre leçon du jour. Tout ce qui est destiné à être vôtre viendra à vous.",
        chancePct: 88,
    },
    {
        sign: "Sagittaire", emoji: "♐", element: "Feu 🔥", dates: "22 nov. - 21 déc.",
        amour: "L'aventure amoureuse vous appelle ! En couple, planifiez un voyage ou une activité inédite. Célibataire, une rencontre lors d'un déplacement ou en ligne pourrait être significative.",
        travail: "Votre optimisme est contagieux et motive vos collègues. Journée favorable pour les projets à l'international ou tout ce qui implique de l'expansion. Voyez grand !",
        sante: "Besoin de bouger et de grands espaces. Une randonnée, un sport en plein air ou même une longue marche sous le soleil rechargera vos batteries.",
        conseil: "La liberté se cultive aussi dans l'esprit. Libérez-vous d'une croyance limitante.",
        chancePct: 83,
    },
    {
        sign: "Capricorne", emoji: "♑", element: "Terre 🌍", dates: "22 déc. - 19 janv.",
        amour: "La stabilité affective est votre priorité. Votre investissement dans la relation porte ses fruits. Les célibataires pourraient être séduits par une personne ambitieuse et responsable.",
        travail: "Journée stratégique pour votre carrière. Un objectif que vous visez depuis longtemps se rapproche. Votre persévérance et votre sérieux sont enfin récompensés.",
        sante: "Prenez soin de vos articulations et de vos os. Les étirements et le calcium sont vos alliés. Ne négligez pas le repos, même vous avez droit de relâcher.",
        conseil: "Derrière votre carapace se cache un cœur tendre. Osez le montrer aujourd'hui.",
        chancePct: 77,
    },
    {
        sign: "Verseau", emoji: "♒", element: "Air 💨", dates: "20 janv. - 18 fév.",
        amour: "Votre originalité séduit et intrigue. En couple, surprenez votre partenaire avec une idée décalée. Célibataire, votre côté unique attire les âmes libres comme vous.",
        travail: "Les idées innovantes fusent ! C'est le moment de proposer un projet créatif ou une nouvelle approche. Votre vision d'avenir inspire votre entourage professionnel.",
        sante: "La circulation sanguine mérite votre attention. Bougez régulièrement, évitez de rester assis(e) trop longtemps. L'acupuncture ou la réflexologie pourraient vous faire du bien.",
        conseil: "Votre différence est votre superpouvoir. Ne cherchez jamais à rentrer dans un moule.",
        chancePct: 79,
    },
    {
        sign: "Poissons", emoji: "♓", element: "Eau 💧", dates: "19 fév. - 20 mars",
        amour: "Votre empathie naturelle touche les cœurs. Aujourd'hui, vos rêves amoureux pourraient devenir réalité si vous osez exprimer vos sentiments. La magie est dans l'air.",
        travail: "Votre créativité est à son apogée. Les métiers artistiques, de l'aide à la personne ou de la communication sont particulièrement favorisés. Laissez libre cours à votre imagination.",
        sante: "Vos pieds, zone sensible de votre signe, réclament attention. Un bain de pieds relaxant aux huiles essentielles serait parfait pour vous ressourcer ce soir.",
        conseil: "Faites confiance à vos rêves. Ils contiennent des messages importants pour votre chemin de vie.",
        chancePct: 86,
    },
];

export default function HoroscopePage() {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    const dateStr = today.toLocaleDateString('fr-FR', options);

    return (
        <>
            {/* HEADER */}
            <section className="py-16 sm:py-24 text-center relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-mystic-600/10 blur-[100px]" />
                <div className="relative z-10 max-w-3xl mx-auto px-4">
                    <div className="text-5xl mb-6">♈</div>
                    <h1 className="font-heading text-3xl sm:text-5xl font-bold text-white mb-4">
                        Horoscope <span className="text-mystic-400">Gratuit</span> du Jour
                    </h1>
                    <p className="text-mystic-300 text-lg capitalize">{dateStr}</p>
                    <div className="mystic-divider max-w-xs mx-auto mt-6" />
                </div>
            </section>

            {/* HOROSCOPES */}
            <section className="pb-20 sm:pb-28">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
                    {horoscopes.map((h) => (
                        <div key={h.sign} className="glass-card overflow-hidden" id={h.sign.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}>
                            {/* Sign header */}
                            <div className="flex items-center gap-4 p-6 sm:p-8 border-b border-mystic-700/20">
                                <div className="zodiac-icon text-3xl flex-shrink-0">{h.emoji}</div>
                                <div className="flex-1">
                                    <h2 className="font-heading text-2xl font-bold text-white">{h.sign}</h2>
                                    <p className="text-mystic-500 text-sm">{h.dates} — {h.element}</p>
                                </div>
                                <div className="hidden sm:block text-right">
                                    <div className="text-sm text-mystic-400 mb-1">Chance du jour</div>
                                    <div className="text-2xl font-bold text-gold-400">{h.chancePct}%</div>
                                </div>
                            </div>

                            {/* Categories */}
                            <div className="grid sm:grid-cols-2 gap-0">
                                <div className="p-6 sm:p-8 border-b sm:border-b-0 sm:border-r border-mystic-700/20">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-red-400">❤️</span>
                                        <h3 className="font-heading text-sm font-bold text-gold-400 uppercase tracking-wider">Amour</h3>
                                    </div>
                                    <p className="text-mystic-300 text-sm leading-relaxed">{h.amour}</p>
                                </div>
                                <div className="p-6 sm:p-8 border-b border-mystic-700/20">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span>💼</span>
                                        <h3 className="font-heading text-sm font-bold text-gold-400 uppercase tracking-wider">Travail</h3>
                                    </div>
                                    <p className="text-mystic-300 text-sm leading-relaxed">{h.travail}</p>
                                </div>
                                <div className="p-6 sm:p-8 sm:border-r border-b sm:border-b-0 border-mystic-700/20">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span>💚</span>
                                        <h3 className="font-heading text-sm font-bold text-gold-400 uppercase tracking-wider">Santé</h3>
                                    </div>
                                    <p className="text-mystic-300 text-sm leading-relaxed">{h.sante}</p>
                                </div>
                                <div className="p-6 sm:p-8">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span>💫</span>
                                        <h3 className="font-heading text-sm font-bold text-gold-400 uppercase tracking-wider">Conseil du jour</h3>
                                    </div>
                                    <p className="text-mystic-200 text-sm leading-relaxed italic">&ldquo;{h.conseil}&rdquo;</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA vers voyance */}
            <section className="py-16 text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">
                        Besoin d&apos;une réponse plus précise ?
                    </h2>
                    <p className="text-mystic-400 mb-8">
                        Posez votre question au pendule et recevez une réponse personnalisée par Oui ou Non.
                    </p>
                    <a href="/voyance" className="btn-gold text-lg">
                        🔮 Consulter le Pendule — dès 5€
                    </a>
                </div>
            </section>
        </>
    );
}
