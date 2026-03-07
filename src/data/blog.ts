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
    },
    {
        title: "Les pierres de protection : quels cristaux pour vous protéger ?",
        slug: "pierres-protection-cristaux-energie",
        excerpt: "Œil de tigre, tourmaline noire, améthyste... Certaines pierres possèdent des propriétés protectrices puissantes. Découvrez lesquelles choisir selon vos besoins.",
        date: "4 Mars 2026",
        category: "Bien-être",
        image: "💎",
        content: `
            <p>Depuis des millénaires, les civilisations du monde entier utilisent les pierres et les cristaux pour se protéger des énergies négatives, renforcer leur aura et attirer les vibrations positives. Ce n'est ni de la magie ni de la superstition : c'est de la lithothérapie, une pratique fondée sur les propriétés vibratoires naturelles des minéraux.</p>

            <h2 class="text-2xl font-bold text-mystic-200 mt-8 mb-4">Les 5 pierres de protection essentielles</h2>
            <ul class="list-disc list-inside space-y-3 mt-4">
                <li><strong>Tourmaline noire — Le bouclier absolu :</strong> C'est la pierre de protection la plus puissante. Elle absorbe les énergies négatives, protège des ondes électromagnétiques et ancre profondément. Idéale à porter sur soi quotidiennement ou à placer près de l'entrée de la maison.</li>
                <li><strong>Œil de tigre — Le miroir protecteur :</strong> Cette pierre dorée agit comme un miroir qui renvoie les mauvaises intentions à leur expéditeur. Elle protège du mauvais œil et renforce la confiance en soi. Les Romains la portaient déjà au combat.</li>
                <li><strong>Améthyste — La pierre spirituelle :</strong> Pierre du chakra du troisième œil, l'améthyste purifie l'esprit, calme les angoisses et développe l'intuition. Elle est particulièrement efficace pour les personnes hypersensibles aux énergies des autres.</li>
                <li><strong>Labradorite — L'éponge à énergies :</strong> La labradorite absorbe les énergies négatives des personnes que vous côtoyez. C'est LA pierre des thérapeutes, des soignants et de tous ceux qui travaillent au contact du public.</li>
                <li><strong>Obsidienne noire — Le nettoyeur profond :</strong> Pierre volcanique puissante, l'obsidienne révèle les vérités cachées et nettoie les blocages énergétiques profonds. À utiliser avec précaution car son énergie est intense.</li>
            </ul>

            <h2 class="text-2xl font-bold text-mystic-200 mt-8 mb-4">Comment utiliser vos pierres ?</h2>
            <p>La façon la plus simple est de porter votre pierre en bijou (bracelet, pendentif) ou de la glisser dans votre poche. Vous pouvez aussi :</p>
            <ul class="list-disc list-inside space-y-2 mt-4">
                <li>Placer une tourmaline noire à l'entrée de votre maison pour filtrer les énergies</li>
                <li>Dormir avec une améthyste sous l'oreiller pour des rêves lucides</li>
                <li>Méditer avec votre pierre dans la main pour amplifier votre intention</li>
                <li>Placer un œil de tigre sur votre bureau pour la confiance en soi</li>
            </ul>

            <h2 class="text-2xl font-bold text-mystic-200 mt-8 mb-4">Purifier et recharger vos cristaux</h2>
            <p>Les pierres absorbent les énergies et ont besoin d'être nettoyées régulièrement. Passez-les sous l'eau claire (sauf les pierres fragiles), exposez-les à la lumière de la Pleine Lune ou posez-les sur un amas de quartz. Une pierre non purifiée perd progressivement son efficacité.</p>

            <div class="bg-mystic-900/50 border border-mystic-700/30 rounded-xl p-6 mt-10">
                <p class="italic text-mystic-300">"Les pierres ne font pas le travail à notre place, mais elles amplifient notre propre lumière intérieure."</p>
            </div>
        `
    },
    {
        title: "Flammes jumelles : reconnaître cette connexion d'âme intense",
        slug: "flammes-jumelles-connexion-ame",
        excerpt: "La flamme jumelle est une connexion d'âme qui dépasse l'amour ordinaire. Apprenez à reconnaître les signes de cette rencontre karmique et à comprendre ses étapes.",
        date: "5 Mars 2026",
        category: "Spiritualité",
        image: "🔥",
        content: `
            <p>Parmi tous les types de connexions d'âme, la flamme jumelle est la plus intense, la plus transformatrice et souvent la plus douloureuse. Contrairement à l'âme sœur qui nous complète harmonieusement, la flamme jumelle est notre miroir parfait — et voir son propre reflet n'est pas toujours confortable.</p>

            <h2 class="text-2xl font-bold text-mystic-200 mt-8 mb-4">Qu'est-ce qu'une flamme jumelle ?</h2>
            <p>Selon la tradition spirituelle, notre âme s'est un jour divisée en deux moitiés. Chaque moitié s'incarne séparément et parcourt son propre chemin d'évolution. La flamme jumelle est l'autre moitié de votre âme. Quand les deux moitiés se retrouvent dans une même vie, la rencontre est d'une intensité foudroyante.</p>

            <h2 class="text-2xl font-bold text-mystic-200 mt-8 mb-4">Les signes d'une rencontre flamme jumelle</h2>
            <ul class="list-disc list-inside space-y-3 mt-4">
                <li><strong>Reconnaissance instantanée :</strong> Dès le premier regard, vous avez l'impression de connaître cette personne depuis toujours. Une familiarité inexplicable et profonde.</li>
                <li><strong>Synchronicités explosives :</strong> Les coïncidences se multiplient : mêmes pensées au même moment, heures miroir à répétition (11h11), rêves identiques.</li>
                <li><strong>Attraction magnétique :</strong> Une attirance physique, émotionnelle et spirituelle d'une intensité jamais ressentie auparavant. Comme un aimant irrésistible.</li>
                <li><strong>Effet miroir :</strong> Cette personne reflète vos blessures les plus profondes. Elle fait remonter tout ce que vous n'avez pas résolu en vous — c'est inconfortable mais nécessaire à votre évolution.</li>
                <li><strong>Phases de fuite et de retrouvailles :</strong> La relation est marquée par des cycles de rapprochement intense et de séparation soudaine. L'un fuit, l'autre poursuit, puis les rôles s'inversent.</li>
            </ul>

            <h2 class="text-2xl font-bold text-mystic-200 mt-8 mb-4">Les 8 étapes du parcours flamme jumelle</h2>
            <ul class="list-disc list-inside space-y-2 mt-4">
                <li><strong>1. La reconnaissance :</strong> coup de foudre spirituel, impression de rentrer à la maison</li>
                <li><strong>2. La lune de miel :</strong> fusion totale, euphorie, sentiment de plénitude absolue</li>
                <li><strong>3. La crise :</strong> les blessures remontent, les peurs s'activent</li>
                <li><strong>4. La fuite :</strong> l'un des deux prend la fuite, submergé par l'intensité</li>
                <li><strong>5. La poursuite :</strong> l'autre tente de retenir ou de comprendre</li>
                <li><strong>6. La nuit noire de l'âme :</strong> douleur profonde, transformation intérieure</li>
                <li><strong>7. Le travail sur soi :</strong> chacun guérit ses blessures de son côté</li>
                <li><strong>8. L'union :</strong> retrouvailles dans la maturité et l'amour inconditionnel (pas toujours garantie dans cette vie)</li>
            </ul>

            <h2 class="text-2xl font-bold text-mystic-200 mt-8 mb-4">Comment le pendule peut aider ?</h2>
            <p>Le pendule est un outil précieux pour les parcours flammes jumelles. Il peut répondre à des questions essentielles : "Est-ce bien ma flamme jumelle ?", "Va-t-il/elle revenir ?", "Suis-je dans la phase de fuite ou de poursuite ?". Ces réponses apportent clarté et sérénité dans un parcours souvent chaotique.</p>

            <p class="mt-6">Vous pensez avoir rencontré votre flamme jumelle ? <a href="/voyance" class="text-gold-400 border-b border-gold-400/30">Consultez Sélène</a> pour une guidance personnalisée.</p>
        `
    },
    {
        title: "La numérologie : ce que votre date de naissance révèle sur vous",
        slug: "numerologie-date-naissance-chemin-vie",
        excerpt: "Votre date de naissance contient un code secret : votre chemin de vie. Découvrez comment le calculer et ce qu'il révèle sur votre destinée.",
        date: "6 Mars 2026",
        category: "Spiritualité",
        image: "🔢",
        content: `
            <p>La numérologie est l'art ancestral d'interpréter les nombres pour comprendre notre personnalité, notre mission de vie et les grands cycles de notre existence. Parmi tous les calculs numériques, le chemin de vie est le plus révélateur : il est la carte d'identité de votre âme.</p>

            <h2 class="text-2xl font-bold text-mystic-200 mt-8 mb-4">Comment calculer votre chemin de vie ?</h2>
            <p>Additionnez tous les chiffres de votre date de naissance jusqu'à obtenir un nombre entre 1 et 9 (ou 11, 22, 33 qui sont des maîtres nombres). Exemple : né(e) le 15/08/1990 → 1+5+0+8+1+9+9+0 = 33 → Maître nombre 33.</p>

            <h2 class="text-2xl font-bold text-mystic-200 mt-8 mb-4">La signification des 9 chemins de vie</h2>
            <ul class="list-disc list-inside space-y-3 mt-4">
                <li><strong>Chemin 1 — Le Leader :</strong> Indépendant, pionnier, ambitieux. Vous êtes fait(e) pour créer, innover et ouvrir des voies. Votre défi : l'égocentrisme et la solitude.</li>
                <li><strong>Chemin 2 — Le Diplomate :</strong> Sensible, intuitif(ve), médiateur(trice) né(e). Vous excellez dans les partenariats et l'harmonie. Votre défi : la dépendance affective.</li>
                <li><strong>Chemin 3 — L'Artiste :</strong> Créatif(ve), communicant(e), joyeux(se). Vous êtes fait(e) pour exprimer votre créativité sous toutes ses formes. Votre défi : la dispersion.</li>
                <li><strong>Chemin 4 — Le Bâtisseur :</strong> Rigoureux(se), fiable, structuré(e). Vous construisez des fondations solides. Votre défi : la rigidité et la résistance au changement.</li>
                <li><strong>Chemin 5 — L'Aventurier :</strong> Libre, curieux(se), en mouvement constant. Vous avez besoin de liberté et de découverte. Votre défi : l'instabilité et l'excès.</li>
                <li><strong>Chemin 6 — Le Protecteur :</strong> Aimant(e), responsable, au service des autres. Famille et harmonie sont vos priorités. Votre défi : le sacrifice excessif et la culpabilité.</li>
                <li><strong>Chemin 7 — Le Chercheur :</strong> Spirituel(le), analytique, en quête de vérité. Vous êtes attiré(e) par les mystères de la vie. Votre défi : l'isolement et le doute.</li>
                <li><strong>Chemin 8 — Le Puissant :</strong> Ambitieux(se), déterminé(e), magnétique. Vous êtes fait(e) pour le pouvoir et l'abondance. Votre défi : l'obsession du contrôle et du matériel.</li>
                <li><strong>Chemin 9 — L'Humaniste :</strong> Altruiste, visionnaire, spirituel(le). Vous êtes une vieille âme en mission d'aide. Votre défi : le détachement et les pertes nécessaires.</li>
            </ul>

            <h2 class="text-2xl font-bold text-mystic-200 mt-8 mb-4">Les Maîtres Nombres : 11, 22, 33</h2>
            <p>Si votre addition donne 11, 22 ou 33 avant de réduire à un chiffre, vous portez un maître nombre. Ces nombres indiquent une mission d'âme plus élevée et une sensibilité spirituelle accrue. Le 11 est le visionnaire intuitif, le 22 le bâtisseur inspiré, et le 33 le maître guérisseur.</p>

            <div class="bg-mystic-900/50 border border-mystic-700/30 rounded-xl p-6 mt-10">
                <p class="italic text-mystic-300">"Les nombres sont le langage silencieux de l'univers. Votre date de naissance est le premier mot qu'il a prononcé en vous accueillant."</p>
            </div>
        `
    },
    {
        title: "Loi de l'attraction : manifester ses désirs grâce à la pensée positive",
        slug: "loi-attraction-manifester-desirs-pensee",
        excerpt: "La loi de l'attraction affirme que nos pensées créent notre réalité. Découvrez comment l'utiliser concrètement pour attirer l'amour, l'argent et le bonheur.",
        date: "3 Mars 2026",
        category: "Bien-être",
        image: "✨",
        content: `
            <p>La loi de l'attraction est l'un des principes universels les plus connus du développement spirituel. Son principe est simple : ce sur quoi vous concentrez votre attention et votre énergie tend à se manifester dans votre vie. Pensées positives = résultats positifs. Pensées négatives = résultats négatifs.</p>

            <h2 class="text-2xl font-bold text-mystic-200 mt-8 mb-4">Comment fonctionne la loi de l'attraction ?</h2>
            <p>L'univers fonctionne par vibrations. Chaque pensée, chaque émotion émet une fréquence vibratoire. La loi de l'attraction stipule que les fréquences similaires s'attirent — comme un aimant. Si vous vibrez à la fréquence de l'abondance, vous attirez l'abondance. Si vous vibrez à la fréquence de la peur, vous attirez ce que vous craignez.</p>

            <h2 class="text-2xl font-bold text-mystic-200 mt-8 mb-4">Les 5 étapes pour manifester</h2>
            <ul class="list-disc list-inside space-y-3 mt-4">
                <li><strong>1. Clarifier son désir :</strong> Soyez précis(e) sur ce que vous voulez. "Je veux être heureux(se)" est trop vague. "Je veux rencontrer un partenaire aimant et stable d'ici cet été" est une intention claire.</li>
                <li><strong>2. Visualiser :</strong> Fermez les yeux et imaginez que votre souhait est déjà réalisé. Ressentez la joie, la gratitude, l'excitation. Le cerveau ne distingue pas la visualisation de la réalité — il envoie les mêmes signaux.</li>
                <li><strong>3. Ressentir :</strong> L'émotion est le carburant de la manifestation. Plus vous ressentez avec intensité que votre souhait est déjà exaucé, plus vous l'attirez vite.</li>
                <li><strong>4. Lâcher prise :</strong> L'étape la plus difficile. Après avoir émis votre intention, lâchez prise. Ne doutez pas, ne calculez pas le "comment". Faites confiance à l'univers pour organiser les détails.</li>
                <li><strong>5. Agir :</strong> La loi de l'attraction n'est pas de la pensée magique. Quand des opportunités se présentent (et elles se présenteront), saisissez-les. L'univers ouvre les portes, mais c'est à vous de les franchir.</li>
            </ul>

            <h2 class="text-2xl font-bold text-mystic-200 mt-8 mb-4">Les affirmations positives</h2>
            <p>Répéter des affirmations positives chaque matin reprogramme votre subconscient. Voici quelques exemples puissants :</p>
            <ul class="list-disc list-inside space-y-2 mt-4">
                <li>"Je mérite l'amour, l'abondance et le bonheur."</li>
                <li>"L'univers conspire en ma faveur."</li>
                <li>"Je suis aligné(e) avec ma mission de vie."</li>
                <li>"Tout ce dont j'ai besoin vient à moi au bon moment."</li>
            </ul>

            <h2 class="text-2xl font-bold text-mystic-200 mt-8 mb-4">Loi de l'attraction et voyance</h2>
            <p>Le pendule peut confirmer si vous êtes aligné(e) avec votre manifestation. Demandez à Sélène : "Suis-je sur la bonne voie pour manifester mon souhait ?" ou "Y a-t-il un blocage énergétique qui m'empêche d'attirer ce que je désire ?". Le pendule identifie les résistances inconscientes qui sabotent vos efforts.</p>

            <p class="mt-6">Besoin de clarté sur votre chemin de manifestation ? <a href="/voyance" class="text-gold-400 border-b border-gold-400/30">Consultez le pendule de Sélène</a> pour identifier et lever vos blocages.</p>
        `
    },
    {
        title: "Les rêves prémonitoires : quand le sommeil nous parle de l'avenir",
        slug: "reves-premonitoires-interpretation-signes",
        excerpt: "Avez-vous déjà rêvé d'un événement avant qu'il ne se produise ? Les rêves prémonitoires sont plus fréquents qu'on ne le croit. Apprenez à les reconnaître.",
        date: "1 Mars 2026",
        category: "Voyance",
        image: "🌙",
        content: `
            <p>Vous avez rêvé d'un accident, et deux jours plus tard, il s'est produit. Vous avez vu le visage d'un inconnu en rêve, et la semaine suivante, vous l'avez croisé dans la rue. Ce ne sont pas des coïncidences : ce sont des rêves prémonitoires, et ils sont bien plus courants qu'on ne le pense.</p>

            <h2 class="text-2xl font-bold text-mystic-200 mt-8 mb-4">Qu'est-ce qu'un rêve prémonitoire ?</h2>
            <p>Un rêve prémonitoire est un rêve qui contient des informations sur un événement futur. Il se distingue des rêves ordinaires par son intensité, sa clarté et la précision de ses détails. Souvent, le rêveur se réveille avec un sentiment fort — certitude, inquiétude ou émerveillement — qui persiste bien après le réveil.</p>

            <h2 class="text-2xl font-bold text-mystic-200 mt-8 mb-4">Comment reconnaître un rêve prémonitoire ?</h2>
            <ul class="list-disc list-inside space-y-3 mt-4">
                <li><strong>Clarté exceptionnelle :</strong> Le rêve est aussi net qu'un film en haute définition. Les détails sont précis : couleurs, sons, visages, lieux.</li>
                <li><strong>Charge émotionnelle forte :</strong> Vous vous réveillez bouleversé(e), avec un sentiment de certitude absolue que "quelque chose" va se passer.</li>
                <li><strong>Mémoire durable :</strong> Contrairement aux rêves ordinaires qui s'effacent vite, le rêve prémonitoire reste gravé dans votre mémoire des jours, des semaines, voire des années.</li>
                <li><strong>Absence de lien avec votre quotidien :</strong> Le rêve ne semble pas lié à vos préoccupations actuelles. Il montre des situations, des personnes ou des lieux que vous ne connaissez pas encore.</li>
                <li><strong>Réalisation ultérieure :</strong> Le signe ultime : l'événement rêvé finit par se produire, parfois exactement comme dans le rêve.</li>
            </ul>

            <h2 class="text-2xl font-bold text-mystic-200 mt-8 mb-4">Comment développer vos rêves prémonitoires</h2>
            <p>Tout le monde possède cette capacité, mais elle est plus développée chez certaines personnes. Pour la cultiver :</p>
            <ul class="list-disc list-inside space-y-2 mt-4">
                <li><strong>Tenez un journal de rêves :</strong> Notez vos rêves chaque matin au réveil, même les fragments. Plus vous y prêtez attention, plus ils deviennent clairs et fréquents.</li>
                <li><strong>Méditez avant de dormir :</strong> Une courte méditation apaise le mental et ouvre les canaux intuitifs du sommeil.</li>
                <li><strong>Posez une question avant de vous endormir :</strong> "Que dois-je savoir sur [situation] ?" Votre subconscient travaillera dessus pendant la nuit.</li>
                <li><strong>Dormez avec une améthyste :</strong> Cette pierre stimule le troisième œil et favorise les rêves lucides et prémonitoires.</li>
            </ul>

            <h2 class="text-2xl font-bold text-mystic-200 mt-8 mb-4">Rêves et pendule</h2>
            <p>Si un rêve vous a marqué(e) et que vous cherchez à comprendre son message, le pendule peut vous aider. Posez des questions précises : "Ce rêve est-il prémonitoire ?", "Concerne-t-il ma vie amoureuse ?", "Dois-je me préparer à un changement ?". Le pendule clarifie les zones d'ombre que le rêve a laissées.</p>

            <div class="bg-mystic-900/50 border border-mystic-700/30 rounded-xl p-6 mt-10">
                <p class="italic text-mystic-300">"Nos rêves sont les lettres que notre âme s'envoie depuis le futur."</p>
            </div>
        `
    },
    {
        title: "Nouvelle Lune : le moment idéal pour poser vos intentions",
        slug: "nouvelle-lune-intentions-rituel-manifestation",
        excerpt: "Si la Pleine Lune libère, la Nouvelle Lune plante les graines. Apprenez à utiliser cette énergie de renouveau pour manifester vos souhaits les plus chers.",
        date: "25 Février 2026",
        category: "Astrologie",
        image: "🌑",
        content: `
            <p>Dans le cycle lunaire, la Nouvelle Lune est le point zéro : la Lune est invisible dans le ciel, plongée dans l'obscurité. C'est un moment de silence cosmique, de retour à soi et de renouveau. Si la Pleine Lune est le moment de libérer et de lâcher prise, la Nouvelle Lune est le moment de semer — de poser vos intentions pour le cycle à venir.</p>

            <h2 class="text-2xl font-bold text-mystic-200 mt-8 mb-4">L'énergie de la Nouvelle Lune</h2>
            <p>La Nouvelle Lune marque le début d'un nouveau cycle de 29 jours. C'est une énergie de commencement, de page blanche, de potentiel pur. Tout ce que vous initiez pendant cette phase bénéficie de l'élan croissant de la Lune qui va grandir nuit après nuit jusqu'à la Pleine Lune.</p>
            <p class="mt-4">C'est pourquoi les grandes décisions, les nouveaux projets et les souhaits les plus importants gagnent à être posés pendant la Nouvelle Lune. Vous plantez une graine dans le sol cosmique, et la Lune croissante l'arrose de son énergie pendant 14 jours.</p>

            <h2 class="text-2xl font-bold text-mystic-200 mt-8 mb-4">Le rituel de la Nouvelle Lune</h2>
            <p>Voici un rituel simple et puissant pour poser vos intentions :</p>
            <ul class="list-disc list-inside space-y-2 mt-4">
                <li><strong>Créez un espace sacré :</strong> Allumez une bougie, brûlez de la sauge ou du palo santo, et installez-vous confortablement.</li>
                <li><strong>Méditez 5 minutes :</strong> Centrez-vous, respirez profondément et connectez-vous à votre cœur.</li>
                <li><strong>Écrivez vos intentions :</strong> Sur un beau papier, notez 3 à 5 souhaits au présent, comme s'ils étaient déjà réalisés. Exemple : "Je suis en couple avec une personne qui m'aime et me respecte."</li>
                <li><strong>Lisez-les à voix haute :</strong> Prononcez vos intentions avec conviction et émotion.</li>
                <li><strong>Rangez le papier :</strong> Placez-le dans un endroit spécial. Relisez-le à chaque Nouvelle Lune pour constater les manifestations.</li>
            </ul>

            <h2 class="text-2xl font-bold text-mystic-200 mt-8 mb-4">Nouvelle Lune et signe astrologique</h2>
            <p>Chaque Nouvelle Lune se produit dans un signe du zodiaque différent, colorant l'énergie du nouveau cycle :</p>
            <ul class="list-disc list-inside space-y-2 mt-4">
                <li><strong>Nouvelle Lune en Bélier :</strong> Idéale pour les nouveaux départs courageux</li>
                <li><strong>Nouvelle Lune en Taureau :</strong> Parfaite pour les intentions financières et matérielles</li>
                <li><strong>Nouvelle Lune en Cancer :</strong> Propice aux souhaits liés au foyer et à la famille</li>
                <li><strong>Nouvelle Lune en Balance :</strong> Favorable aux intentions relationnelles et amoureuses</li>
                <li><strong>Nouvelle Lune en Poissons :</strong> Puissante pour les rêves, l'intuition et la spiritualité</li>
            </ul>

            <p class="mt-6">Pour savoir quel signe influence la prochaine Nouvelle Lune et comment en tirer parti, consultez votre <a href="/horoscope" class="text-gold-400 border-b border-gold-400/30">Horoscope Gratuit</a> ou demandez guidance à <a href="/voyance" class="text-gold-400 border-b border-gold-400/30">Sélène</a>.</p>
        `
    },
    {
        title: "Le tarot de Marseille : comprendre les arcanes majeurs",
        slug: "tarot-marseille-arcanes-majeurs-signification",
        excerpt: "Le tarot de Marseille est l'un des plus anciens outils divinatoires. Découvrez la signification des 22 arcanes majeurs et comment ils éclairent votre chemin.",
        date: "23 Février 2026",
        category: "Voyance",
        image: "🃏",
        content: `
            <p>Le tarot de Marseille est bien plus qu'un jeu de cartes : c'est un livre d'images symboliques créé au XVe siècle qui raconte le voyage de l'âme humaine, de la naissance (Le Mat) à l'accomplissement (Le Monde). Ses 22 arcanes majeurs sont des archétypes universels qui résonnent avec les grandes étapes de notre existence.</p>

            <h2 class="text-2xl font-bold text-mystic-200 mt-8 mb-4">Les arcanes majeurs clés</h2>
            <ul class="list-disc list-inside space-y-3 mt-4">
                <li><strong>Le Mat (0) — Le Voyageur :</strong> Liberté, nouveau départ, saut dans l'inconnu. Il représente le début du voyage, l'innocence et le courage de partir sans savoir où l'on va.</li>
                <li><strong>La Papesse (II) — L'Intuition :</strong> Sagesse intérieure, mystère, connaissance cachée. Elle invite à écouter sa voix intérieure et à faire confiance à son intuition.</li>
                <li><strong>L'Impératrice (III) — La Créativité :</strong> Fertilité, abondance, créativité. Elle annonce une période de création, de naissance (physique ou symbolique) et d'épanouissement.</li>
                <li><strong>La Roue de Fortune (X) — Les Cycles :</strong> Changement, destin, tournant. La roue tourne toujours — ce qui est en haut descendra, ce qui est en bas remontera. Rien n'est permanent.</li>
                <li><strong>La Justice (VIII) — L'Équilibre :</strong> Vérité, karma, conséquences. Ce que vous avez semé, vous le récolterez. La Justice rétablit l'équilibre.</li>
                <li><strong>La Tour (XVI) — La Destruction créatrice :</strong> Effondrement soudain, révélation, libération. Effrayante mais nécessaire : la Tour détruit ce qui n'est plus authentique pour faire place au vrai.</li>
                <li><strong>L'Étoile (XVII) — L'Espoir :</strong> Renouveau, sérénité, guidance divine. Après la tempête de la Tour, l'Étoile apporte la paix et la promesse d'un avenir lumineux.</li>
                <li><strong>Le Monde (XXI) — L'Accomplissement :</strong> Réussite, plénitude, fin de cycle. Vous avez parcouru tout le chemin et atteint votre objectif. Célébrez avant de recommencer un nouveau cycle.</li>
            </ul>

            <h2 class="text-2xl font-bold text-mystic-200 mt-8 mb-4">Tarot et pendule : deux outils complémentaires</h2>
            <p>Le tarot raconte une histoire, le pendule tranche. Là où le tarot explore les nuances et les possibilités, le pendule apporte une réponse directe : oui ou non. Les deux se complètent parfaitement. Le tarot pose le décor, le pendule confirme la direction à prendre.</p>
            <p class="mt-4">C'est pourquoi de nombreux voyants, dont Sélène, utilisent les deux : le pendule pour les questions fermées qui nécessitent une réponse claire, et le tarot pour les questions ouvertes qui demandent une lecture plus profonde des énergies en jeu.</p>

            <h2 class="text-2xl font-bold text-mystic-200 mt-8 mb-4">Tirer les cartes pour soi-même</h2>
            <p>Vous pouvez apprendre à tirer les cartes pour vous-même, mais attention : il est très difficile d'être objectif quand on est émotionnellement impliqué dans la question. C'est pourquoi consulter un voyant extérieur reste la méthode la plus fiable pour obtenir des réponses impartiales.</p>

            <p class="mt-6">Pour des réponses claires et directes à vos questions, <a href="/voyance" class="text-gold-400 border-b border-gold-400/30">consultez le pendule de Sélène</a> — un outil de guidance complémentaire au tarot.</p>
        `
    }
];
