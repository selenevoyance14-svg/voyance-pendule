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
    }
];
