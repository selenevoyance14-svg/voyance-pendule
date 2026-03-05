export interface BlogPost {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    date: string;
    category: string;
    image: string;
}

export const blogPosts: BlogPost[] = [
    {
        title: "Comment le pendule peut éclairer votre avenir ?",
        slug: "comment-le-pendule-eclaire-votre-avenir",
        excerpt: "Le pendule divinatoire est un outil millénaire de radiesthésie. Découvrez comment il permet d'obtenir des réponses claires par oui ou non.",
        date: "24 Février 2026",
        category: "Voyance",
        image: "🔮",
        content: `
            <p>Le pendule divinatoire est l'un des outils les plus fascinants et les plus accessibles de la voyance moderne. Utilisé depuis des millénaires par les sourciers, les guérisseurs et les médiums, il sert de pont entre notre esprit conscient et notre intuition profonde (ou subconscient).</p>
            
            <h2 class="text-2xl font-bold text-mystic-200 mt-8 mb-4">Qu'est-ce que la radiesthésie ?</h2>
            <p>La radiesthésie est la capacité de percevoir des radiations ou des énergies émises par des objets, des lieux ou des corps. Le pendule ne "sait" pas tout par lui-même ; il agit comme un amplificateur de micro-mouvements musculaires inconscients provoqués par votre propre intuition ou par les énergies environnantes.</p>

            <h2 class="text-2xl font-bold text-mystic-200 mt-8 mb-4">Le pouvoir du "Oui" et du "Non"</h2>
            <p>L'avantage majeur du pendule est sa précision binaire. Là où d'autres arts divinatoires peuvent rester flous ou métaphoriques, le pendule tranche. Pour obtenir une guidance efficace, il est essentiel de poser des questions fermées :</p>
            <ul class="list-disc list-inside space-y-2 mt-4">
                <li>Vais-je obtenir ce nouveau poste ?</li>
                <li>Mon ex-partenaire va-t-il revenir vers moi ?</li>
                <li>Est-ce le bon moment pour investir dans ce projet ?</li>
            </ul>

            <h2 class="text-2xl font-bold text-mystic-200 mt-8 mb-4">Comment se préparer à une séance ?</h2>
            <p>Pour que le pendule donne des résultats fiables, le consultant (ou le voyant) doit être dans un état de neutralité totale. Si vous désirez trop ardemment une réponse, vous risquez d'influencer le mouvement du pendule par la pensée. C'est pourquoi faire appel à une tierce personne, comme Sélène, permet d'obtenir une réponse objective et pure de toute influence émotionnelle.</p>

            <div class="bg-mystic-900/50 border border-mystic-700/30 rounded-xl p-6 mt-10">
                <p class="italic text-mystic-300">"Le pendule ne ment jamais, c'est l'esprit qui interprète parfois mal le silence des astres."</p>
            </div>
        `
    },
    {
        title: "Les Anges Gardiens : Comment recevoir leurs messages ?",
        slug: "recevoir-messages-anges-gardiens",
        excerpt: "Chaque être humain possède un protecteur céleste. Apprenez à reconnaître les signes et les synchronicités qu'ils nous envoient quotidiennement.",
        date: "22 Février 2026",
        category: "Spiritualité",
        image: "👼",
        content: `
            <p>Depuis la nuit des temps, les traditions spirituelles nous enseignent que nous ne sommes jamais seuls. Les Anges Gardiens sont des êtres de lumière dont la mission est de nous guider, de nous protéger et de nous inspirer sur notre chemin de vie.</p>

            <h2 class="text-2xl font-bold text-mystic-200 mt-8 mb-4">Reconnaître les signes de vos anges</h2>
            <p>Les anges communiquent rarement de manière directe ou bruyante. Ils utilisent des signes subtils que l'on appelle des synchronicités. Voici les plus fréquents :</p>
            <ul class="list-disc list-inside space-y-2 mt-4">
                <li><strong>Les heures miroir :</strong> 11h11, 22h22... Si votre regard tombe souvent sur ces heures, un message vous est destiné.</li>
                <li><strong>Les plumes blanches :</strong> Trouver une plume blanche dans un endroit inhabituel est souvent un signe de protection.</li>
                <li><strong>Les séquences de chiffres :</strong> Le 444, le 777 ou le 888 ont des significations angéliques précises liées au soutien et à l'abondance.</li>
            </ul>

            <h2 class="text-2xl font-bold text-mystic-200 mt-8 mb-4">Comment connaître son Ange Gardien ?</h2>
            <p>Selon la tradition de la Kabbale, il existe 72 anges gardiens. Votre protecteur est déterminé par votre date de naissance. Chaque ange possède des attributs spécifiques et régit certains domaines de la vie (amour, sagesse, justice, protection matérielle).</p>

            <h2 class="text-2xl font-bold text-mystic-200 mt-8 mb-4">Invoquer la guidance angélique</h2>
            <p>Il n'est pas nécessaire d'être un expert en ésotérisme pour parler à son ange. Une simple intention du cœur ou une pensée dirigée suffit. Vous pouvez demander de la clarté avant de vous endormir, ou solliciter son aide pour trouver une solution à un problème qui vous semble insurmontable.</p>

            <p class="mt-6">En consultant notre section <a href="/anges" class="text-gold-400 border-b border-gold-400/30">Anges Gardiens</a>, vous pourrez découvrir gratuitement l'identité de votre protecteur céleste et le message qu'il a pour vous en ce moment.</p>
        `
    },
    {
        title: "Horoscope : Pourquoi le consulter chaque jour ?",
        slug: "pourquoi-consulter-horoscope-quotidien",
        excerpt: "L'astrologie n'est pas une fatalité, mais une boussole énergétique. Comprenez comment les transits planétaires influencent votre humeur et vos chances.",
        date: "20 Février 2026",
        category: "Astrologie",
        image: "♈",
        content: `
            <p>Beaucoup voient l'horoscope comme un simple divertissement. Pourtant, pour ceux qui savent lire entre les lignes, l'astrologie quotidienne offre une lecture des énergies du moment, un peu comme une météo de l'âme.</p>

            <h2 class="text-2xl font-bold text-mystic-200 mt-8 mb-4">Anticiper les courants énergétiques</h2>
            <p>Chaque jour, les planètes se déplacent dans le zodiaque, formant des "aspects" (des angles) entre elles. Ces configurations créent une ambiance particulière. Par exemple :</p>
            <ul class="list-disc list-inside space-y-2 mt-4">
                <li><strong>Mercure rétrograde :</strong> Risques de malentendus dans la communication et retards techniques.</li>
                <li><strong>Vénus en aspect harmonieux :</strong> Jour idéale pour les rencontres amoureuses ou les réconciliations.</li>
                <li><strong>Lune en Scorpion :</strong> Émotions intenses et besoin d'introspection nécessaire.</li>
            </ul>

            <h2 class="text-2xl font-bold text-mystic-200 mt-8 mb-4">Le libre arbitre vs Le destin</h2>
            <p>L'horoscope ne dit pas "ce qui va arriver" de manière figée, mais plutôt "quelles énergies seront présentes". C'est à vous d'utiliser ces énergies au mieux. Si les astres indiquent une tension au travail, vous pouvez choisir la diplomatie plutôt que l'affrontement.</p>

            <h2 class="text-2xl font-bold text-mystic-200 mt-8 mb-4">Une boussole pour le quotidien</h2>
            <p>Prendre deux minutes chaque matin pour lire son horoscope permet de s'ancrer et de prendre du recul sur les événements de la journée. C'est un outil de développement personnel qui nous rappelle que nous faisons partie d'un tout plus vaste, rythmé par les cycles de l'univers.</p>

            <p class="mt-6 text-mystic-300">N'oubliez pas de consulter notre <a href="/horoscope" class="text-gold-400 border-b border-gold-400/30">Horoscope Gratuit</a> quotidiennement pour rester en phase avec votre destinée.</p>
        `
    },
    {
        title: "Les heures miroir : quand l'univers vous parle",
        slug: "heures-miroir-signification-messages",
        excerpt: "11h11, 22h22, 14h14... Vous voyez souvent ces chiffres ? Ce n'est pas un hasard. Découvrez la signification des heures miroir et les messages qu'elles portent.",
        date: "2 Mars 2026",
        category: "Spiritualité",
        image: "🕐",
        content: `
            <p>Vous regardez votre téléphone et il affiche 11h11. Quelques heures plus tard, vous jetez un œil à l'horloge : 22h22. Ce phénomène se répète depuis des jours, parfois des semaines. Si cela vous arrive, sachez que ce n'est pas anodin. Les heures miroir sont considérées comme des messages de l'univers, de vos anges gardiens ou de votre subconscient profond.</p>

            <h2 class="text-2xl font-bold text-mystic-200 mt-8 mb-4">Qu'est-ce qu'une heure miroir ?</h2>
            <p>Une heure miroir est une heure où les chiffres se répètent symétriquement : 01h01, 02h02, 03h03... jusqu'à 23h23. Il existe aussi les heures inversées (13h31, 14h41) et les heures triplées (11h10, 22h20). Chacune porte un message spécifique lié à la numérologie et à l'angéologie.</p>

            <h2 class="text-2xl font-bold text-mystic-200 mt-8 mb-4">Les heures miroir les plus puissantes</h2>
            <ul class="list-disc list-inside space-y-3 mt-4">
                <li><strong>11h11 — Le portail de manifestation :</strong> Vos pensées se matérialisent plus vite que d'habitude. Concentrez-vous sur ce que vous désirez, pas sur ce que vous craignez. C'est un signal d'alignement spirituel puissant.</li>
                <li><strong>22h22 — La confirmation :</strong> Vous êtes sur le bon chemin. L'univers vous confirme que vos décisions récentes sont justes. Continuez avec confiance.</li>
                <li><strong>00h00 — Le nouveau départ :</strong> Un cycle se termine, un autre commence. C'est le moment idéal pour lâcher prise sur le passé et embrasser le renouveau.</li>
                <li><strong>12h12 — L'harmonie :</strong> Vos guides vous invitent à maintenir l'équilibre entre votre vie matérielle et spirituelle. Prenez soin de votre bien-être intérieur.</li>
                <li><strong>14h14 — La protection :</strong> Vos anges gardiens veillent sur vous de manière renforcée. Si vous traversez une période difficile, ils vous assurent de leur présence.</li>
            </ul>

            <h2 class="text-2xl font-bold text-mystic-200 mt-8 mb-4">Comment interpréter les heures miroir ?</h2>
            <p>Lorsque vous tombez sur une heure miroir, prenez un instant pour noter ce que vous étiez en train de penser ou de ressentir à ce moment précis. Souvent, le message est directement lié à vos préoccupations du moment. C'est une forme de guidance instantanée.</p>
            <p class="mt-4">La clé est de rester ouvert et réceptif. Plus vous prêtez attention à ces signes, plus ils se manifestent. C'est un dialogue silencieux entre vous et les forces qui vous guident.</p>

            <div class="bg-mystic-900/50 border border-mystic-700/30 rounded-xl p-6 mt-10">
                <p class="italic text-mystic-300">"Les heures miroir sont les clins d'œil de l'univers à ceux qui savent regarder au bon moment."</p>
            </div>
        `
    },
    {
        title: "Pleine Lune : comment utiliser son énergie pour votre vie ?",
        slug: "pleine-lune-energie-rituel-influence",
        excerpt: "La Pleine Lune amplifie nos émotions et nos intentions. Apprenez à canaliser cette énergie puissante pour transformer votre quotidien.",
        date: "28 Février 2026",
        category: "Astrologie",
        image: "🌕",
        content: `
            <p>Depuis l'Antiquité, la Pleine Lune fascine et intrigue. Les anciens la vénéraient comme une divinité, les agriculteurs calaient leurs semis sur ses cycles, et les guérisseurs récoltaient leurs herbes à sa lumière. Aujourd'hui encore, beaucoup ressentent son influence sans toujours comprendre pourquoi.</p>

            <h2 class="text-2xl font-bold text-mystic-200 mt-8 mb-4">L'influence de la Pleine Lune sur nos émotions</h2>
            <p>La Lune gouverne les marées, et notre corps est composé à 60% d'eau. Il n'est donc pas surprenant qu'elle influence notre état émotionnel. Pendant la Pleine Lune, les émotions sont amplifiées : les joies sont plus intenses, mais les angoisses aussi. C'est un moment de vérité intérieure où ce qui était enfoui remonte à la surface.</p>
            <p class="mt-4">Si vous vous sentez plus sensible, plus agité(e) ou plus intuitif(ve) aux alentours de la Pleine Lune, c'est tout à fait normal. Votre corps et votre esprit réagissent à cette énergie cosmique.</p>

            <h2 class="text-2xl font-bold text-mystic-200 mt-8 mb-4">Le rituel de la Pleine Lune</h2>
            <p>La Pleine Lune est le moment idéal pour <strong>libérer ce qui ne vous sert plus</strong> : pensées négatives, relations toxiques, habitudes nocives, peurs anciennes. Voici un rituel simple et puissant :</p>
            <ul class="list-disc list-inside space-y-2 mt-4">
                <li><strong>Écrivez</strong> sur un papier tout ce dont vous souhaitez vous libérer.</li>
                <li><strong>Lisez-le à voix haute</strong> sous la lumière de la lune (ou face à une fenêtre).</li>
                <li><strong>Brûlez le papier</strong> en toute sécurité, en visualisant ces blocages qui se dissolvent.</li>
                <li><strong>Remerciez</strong> l'univers pour cette libération et ouvrez-vous au renouveau.</li>
            </ul>

            <h2 class="text-2xl font-bold text-mystic-200 mt-8 mb-4">Pleine Lune et voyance</h2>
            <p>Les séances de voyance sont particulièrement puissantes pendant la Pleine Lune. L'énergie lunaire amplifie les canaux intuitifs, rendant les réponses du pendule plus claires et plus précises. Si vous hésitez sur le moment idéal pour consulter, la période de Pleine Lune est un excellent choix.</p>

            <p class="mt-6">Pour savoir ce que les astres vous réservent, consultez votre <a href="/horoscope" class="text-gold-400 border-b border-gold-400/30">Horoscope Gratuit</a> ou posez directement vos questions à <a href="/voyance" class="text-gold-400 border-b border-gold-400/30">Sélène et son pendule</a>.</p>
        `
    },
    {
        title: "Chakras et énergie : les 7 centres qui gouvernent votre vie",
        slug: "chakras-7-centres-energie-equilibre",
        excerpt: "Les 7 chakras sont des centres d'énergie vitale. Quand ils sont équilibrés, tout coule : santé, relations, intuition. Découvrez comment les harmoniser.",
        date: "26 Février 2026",
        category: "Bien-être",
        image: "🧘",
        content: `
            <p>Dans les traditions hindoues et bouddhistes, le corps humain possède 7 centres d'énergie principaux appelés chakras. Du sanskrit "roue", chaque chakra tourne et vibre à une fréquence spécifique, influençant notre santé physique, émotionnelle et spirituelle.</p>

            <h2 class="text-2xl font-bold text-mystic-200 mt-8 mb-4">Les 7 chakras et leurs rôles</h2>
            <ul class="list-disc list-inside space-y-3 mt-4">
                <li><strong>Chakra Racine (Muladhara) — Rouge :</strong> Situé à la base de la colonne, il gouverne notre sentiment de sécurité et d'ancrage. Un chakra racine déséquilibré provoque anxiété et instabilité.</li>
                <li><strong>Chakra Sacré (Svadhisthana) — Orange :</strong> Juste sous le nombril, il régit la créativité, la sexualité et les émotions. Son blocage entraîne culpabilité et manque de plaisir.</li>
                <li><strong>Chakra du Plexus Solaire (Manipura) — Jaune :</strong> Au niveau de l'estomac, c'est le centre de la confiance en soi et du pouvoir personnel. Quand il est faible, on manque d'estime de soi.</li>
                <li><strong>Chakra du Cœur (Anahata) — Vert :</strong> Au centre de la poitrine, il gouverne l'amour, la compassion et le pardon. Son blocage crée de la rancœur et de l'isolement.</li>
                <li><strong>Chakra de la Gorge (Vishuddha) — Bleu :</strong> Lié à la communication et à l'expression de soi. Un déséquilibre se traduit par la difficulté à dire sa vérité.</li>
                <li><strong>Chakra du Troisième Œil (Ajna) — Indigo :</strong> Entre les sourcils, c'est le siège de l'intuition et de la clairvoyance. C'est ce chakra que les voyants développent pour percevoir au-delà du visible.</li>
                <li><strong>Chakra Couronne (Sahasrara) — Violet :</strong> Au sommet du crâne, il nous relie à la conscience universelle et à la spiritualité.</li>
            </ul>

            <h2 class="text-2xl font-bold text-mystic-200 mt-8 mb-4">Comment savoir si vos chakras sont déséquilibrés ?</h2>
            <p>Certains signes physiques et émotionnels peuvent indiquer un blocage :</p>
            <ul class="list-disc list-inside space-y-2 mt-4">
                <li>Fatigue chronique sans raison médicale apparente</li>
                <li>Difficultés relationnelles récurrentes</li>
                <li>Sentiment de blocage dans un domaine de vie (carrière, amour, finances)</li>
                <li>Manque d'intuition ou de créativité</li>
                <li>Anxiété, peurs irrationnelles ou insomnie</li>
            </ul>

            <h2 class="text-2xl font-bold text-mystic-200 mt-8 mb-4">Rééquilibrer ses chakras au quotidien</h2>
            <p>Plusieurs pratiques simples permettent de réharmoniser vos centres d'énergie : la méditation, la visualisation de couleurs, le yoga, les pierres (améthyste pour le 3e œil, quartz rose pour le cœur), et même certaines huiles essentielles.</p>
            <p class="mt-4">Le pendule est également un outil précieux pour détecter quel chakra est bloqué. En le faisant tourner au-dessus de chaque centre, un voyant expérimenté peut identifier les déséquilibres et vous guider vers les solutions adaptées.</p>

            <div class="bg-mystic-900/50 border border-mystic-700/30 rounded-xl p-6 mt-10">
                <p class="italic text-mystic-300">"Quand vos chakras dansent en harmonie, votre vie entière s'illumine."</p>
            </div>
        `
    },
    {
        title: "Voyance et amour : les 5 questions les plus posées au pendule",
        slug: "voyance-amour-questions-pendule",
        excerpt: "L'amour est le domaine qui suscite le plus de consultations. Découvrez les 5 questions que les consultants posent le plus souvent à Sélène.",
        date: "18 Février 2026",
        category: "Voyance",
        image: "💜",
        content: `
            <p>Parmi toutes les consultations que Sélène réalise avec son pendule, l'amour est de loin le thème le plus fréquent. Qu'il s'agisse d'une relation naissante, d'un couple en crise ou d'un ex qui revient, les questions du cœur nous touchent tous au plus profond.</p>

            <h2 class="text-2xl font-bold text-mystic-200 mt-8 mb-4">1. "Est-ce qu'il/elle m'aime vraiment ?"</h2>
            <p>C'est LA question numéro 1. Le doute est l'ennemi du cœur. Quand les mots ne suffisent plus à rassurer, le pendule peut apporter une clarté instantanée. Sa réponse binaire — oui ou non — coupe court aux ruminations et permet d'avancer avec plus de sérénité.</p>

            <h2 class="text-2xl font-bold text-mystic-200 mt-8 mb-4">2. "Mon ex va-t-il/elle revenir ?"</h2>
            <p>Après une rupture, l'espoir d'un retour est naturel. Le pendule capte les énergies entre deux personnes, même à distance. Il peut indiquer si un lien énergétique fort existe encore ou si le cycle de cette relation est terminé. Dans les deux cas, la réponse aide à tourner la page ou à garder espoir en conscience.</p>

            <h2 class="text-2xl font-bold text-mystic-200 mt-8 mb-4">3. "Vais-je rencontrer quelqu'un cette année ?"</h2>
            <p>Pour les célibataires en quête d'amour, cette question revient très souvent. Le pendule ne prédit pas une date précise, mais il capte les courants énergétiques autour du consultant. Un "oui" enthousiaste du pendule est souvent le signe que l'univers prépare déjà cette rencontre.</p>

            <h2 class="text-2xl font-bold text-mystic-200 mt-8 mb-4">4. "Est-ce la bonne personne pour moi ?"</h2>
            <p>Au début d'une relation, on se demande toujours si c'est "la bonne". Le pendule aide à voir au-delà des apparences et des premiers émois. Il sonde la compatibilité énergétique profonde entre deux âmes, au-delà de l'attirance physique ou intellectuelle.</p>

            <h2 class="text-2xl font-bold text-mystic-200 mt-8 mb-4">5. "Mon couple va-t-il surmonter cette épreuve ?"</h2>
            <p>Infidélité, distance, désaccords profonds... Les épreuves testent la solidité d'un couple. Le pendule peut révéler si les énergies de réconciliation sont présentes ou si la séparation est inévitable. Cette guidance permet de prendre des décisions en toute lucidité, sans se laisser aveugler par la peur ou la colère.</p>

            <h2 class="text-2xl font-bold text-mystic-200 mt-8 mb-4">Pourquoi le pendule est idéal pour les questions d'amour ?</h2>
            <p>En amour, on a souvent besoin d'une réponse claire, pas d'une longue analyse. Le pendule offre exactement cela : un oui ou un non, direct et sans ambiguïté. Associé aux interprétations mystiques de Sélène, il apporte à la fois la réponse et le réconfort dont le cœur a besoin.</p>

            <p class="mt-6">Vous avez une question qui vous brûle le cœur ? <a href="/voyance" class="text-gold-400 border-b border-gold-400/30">Posez-la à Sélène</a> et recevez votre réponse personnalisée sous 24h.</p>
        `
    }
];
