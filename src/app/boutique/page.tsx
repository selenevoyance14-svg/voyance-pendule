import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Boutique Spirituelle — Selene Voyance",
    description: "Notre selection d'objets spirituels : pendules, tarots, bougies, encens, pierres et livres de voyance. Tout pour votre pratique spirituelle.",
};

const categories = [
    {
        title: "Pendules de Voyance",
        emoji: "🔮",
        intro: "Le pendule est l'outil fondamental de la radiesthésie. Utilisé depuis l'Antiquité, il permet de capter les énergies subtiles et de répondre à vos questions par des mouvements circulaires ou linéaires. Le choix du matériau est important : le cristal de roche offre une grande polyvalence, l'améthyste renforce l'intuition, tandis que le laiton est apprécié pour sa précision. Pour débuter, un coffret complet avec planche de radiesthésie est idéal.",
        items: [
            { name: "Pendule en cristal de roche", desc: "Le cristal de roche est le pendule le plus polyvalent. Pierre de clarté par excellence, il amplifie les énergies et convient aussi bien aux débutants qu'aux praticiens confirmés. Son quartz transparent capte les vibrations avec finesse, ce qui en fait l'outil de référence en radiesthésie.", link: "https://www.amazon.fr/s?k=pendule+radiesthesie+cristal+roche&tag=lebrunnathali-21" },
            { name: "Pendule en améthyste", desc: "L'améthyste est la pierre de l'intuition et de la sagesse. Ce pendule est particulièrement recommandé pour ceux qui souhaitent développer leurs capacités psychiques et leur connexion spirituelle. Sa vibration violette apaise l'esprit et favorise un état de réceptivité propice à la consultation.", link: "https://www.amazon.fr/s?k=pendule+amethyste+radiesthesie&tag=lebrunnathali-21" },
            { name: "Pendule en laiton", desc: "Le pendule en laiton est le choix des radiesthésistes expérimentés. Son poids et sa densité métallique offrent des mouvements précis et réactifs, avec des oscillations nettes et faciles à interpréter. Il est particulièrement efficace pour les questions nécessitant des réponses claires et directes.", link: "https://www.amazon.fr/s?k=pendule+laiton+radiesthesie+professionnel&tag=lebrunnathali-21" },
            { name: "Coffret pendule + planche", desc: "Le kit complet pour bien démarrer en radiesthésie : un pendule, une planche de radiesthésie avec les réponses prédéfinies (oui, non, peut-être) et un guide d'utilisation. C'est le cadeau idéal pour quelqu'un qui souhaite découvrir le pendule sans se tromper dans le choix du matériel.", link: "https://www.amazon.fr/s?k=coffret+pendule+planche+radiesthesie+guide&tag=lebrunnathali-21" },
        ],
    },
    {
        title: "Tarots & Oracles",
        emoji: "🃏",
        intro: "Les cartes de tarot et les oracles sont des supports de divination millénaires. Le tarot de Marseille, avec ses 78 arcanes, offre une lecture profonde et symbolique. Les oracles, plus intuitifs, délivrent des messages directs et accessibles. Que vous soyez débutant ou praticien confirmé, il existe un jeu adapté à votre sensibilité. L'important est de choisir celui qui résonne avec vous.",
        items: [
            { name: "Tarot de Marseille", desc: "Le tarot classique par excellence, ancré dans la tradition française depuis le XVe siècle. Ses 78 cartes — 22 arcanes majeurs et 56 arcanes mineurs — offrent un symbolisme riche et une profondeur de lecture inégalée. Chaque carte raconte une histoire, et l'ensemble forme un véritable chemin initiatique.", link: "https://www.amazon.fr/s?k=tarot+de+marseille+jeu+cartes&tag=lebrunnathali-21" },
            { name: "Oracle de Belline", desc: "L'oracle préféré des voyants français, créé au XIXe siècle par le Mage Edmond. Ses 52 cartes sont directes, précises et sans ambiguïté. Contrairement au tarot qui demande une interprétation symbolique, l'Oracle de Belline va droit au but avec des mots clés clairs sur chaque carte.", link: "https://www.amazon.fr/s?k=oracle+belline+cartes+voyance&tag=lebrunnathali-21" },
            { name: "Oracle des Anges", desc: "Un oracle de guidance douce et bienveillante pour communiquer avec vos anges gardiens au quotidien. Chaque carte porte un message positif et réconfortant. C'est l'oracle idéal pour ceux qui cherchent de l'apaisement et une connexion avec le divin plutôt que des prédictions précises.", link: "https://www.amazon.fr/s?k=oracle+anges+gardiens+cartes&tag=lebrunnathali-21" },
            { name: "Tarot Rider-Waite", desc: "Le tarot le plus utilisé dans le monde anglophone, avec les illustrations iconiques d'Arthur Edward Waite et Pamela Colman Smith (1909). Chaque carte mineure est illustrée (contrairement au Marseille), ce qui facilite l'apprentissage. C'est le jeu recommandé pour apprendre le tarot.", link: "https://www.amazon.fr/s?k=tarot+rider+waite+original&tag=lebrunnathali-21" },
            { name: "Oracle Lenormand", desc: "Créé au XIXe siècle en hommage à la célèbre cartomancienne Marie-Anne Lenormand, ce jeu de 36 cartes offre des lectures précises et concrètes. Très populaire en Europe, il se distingue par ses combinaisons de cartes qui permettent des interprétations nuancées et détaillées.", link: "https://www.amazon.fr/s?k=oracle+lenormand+petit+jeu+cartes&tag=lebrunnathali-21" },
        ],
    },
    {
        title: "Pierres & Cristaux",
        emoji: "💎",
        intro: "La lithothérapie utilise l'énergie des pierres et des cristaux pour harmoniser le corps et l'esprit. Chaque pierre possède des propriétés vibratoires uniques : l'améthyste apaise et développe l'intuition, le quartz rose ouvre le cœur, la labradorite protège des énergies négatives. En voyance, les pierres renforcent la connexion spirituelle et purifient l'espace de consultation. Elles se rechargent à la lumière de la lune ou sur une géode.",
        items: [
            { name: "Améthyste brute", desc: "Pierre de la sagesse et de l'intuition, l'améthyste est indispensable en spiritualité. Elle purifie l'esprit, calme les pensées agitées et favorise un état méditatif profond. Placée dans votre espace de consultation, elle élève la vibration et aide à recevoir les messages avec clarté. Se recharge à la lumière de la pleine lune.", link: "https://www.amazon.fr/s?k=amethyste+brute+pierre+naturelle&tag=lebrunnathali-21" },
            { name: "Quartz rose", desc: "Le quartz rose est la pierre de l'amour inconditionnel et de la douceur. Il apaise le cœur, dissout les tensions émotionnelles et attire les énergies positives dans votre vie. En consultation, il favorise un climat de confiance et de bienveillance. C'est aussi la pierre idéale pour les questions liées à l'amour et aux relations.", link: "https://www.amazon.fr/s?k=quartz+rose+pierre+naturelle+lithotherapie&tag=lebrunnathali-21" },
            { name: "Labradorite", desc: "La labradorite est la pierre de protection par excellence pour les personnes sensibles aux énergies. Elle agit comme un bouclier qui absorbe les énergies négatives et les empêche de vous atteindre. Essentielle pour les praticiens de voyance qui sont en contact avec les émotions des autres. Ses reflets bleu-vert sont le signe de sa puissance.", link: "https://www.amazon.fr/s?k=labradorite+pierre+protection+naturelle&tag=lebrunnathali-21" },
            { name: "Œil de tigre", desc: "L'œil de tigre est une pierre de courage, de confiance en soi et de protection. Depuis l'Antiquité, on lui prête le pouvoir de repousser le mauvais œil et les pensées négatives. En lithothérapie, il renforce la volonté et aide à prendre des décisions avec assurance. Sa couleur brun doré caractéristique en fait aussi une belle pièce décorative.", link: "https://www.amazon.fr/s?k=oeil+tigre+pierre+naturelle+protection&tag=lebrunnathali-21" },
            { name: "Coffret 7 chakras", desc: "Ce coffret réunit les 7 pierres correspondant aux 7 chakras principaux : jaspe rouge (racine), cornaline (sacré), citrine (plexus solaire), aventurine verte (cœur), calcédoine bleue (gorge), lapis-lazuli (troisième œil) et améthyste (couronne). Idéal pour rééquilibrer vos centres énergétiques lors de vos séances de méditation.", link: "https://www.amazon.fr/s?k=coffret+pierres+7+chakras+lithotherapie&tag=lebrunnathali-21" },
        ],
    },
    {
        title: "Bougies & Encens",
        emoji: "🕯️",
        intro: "Les bougies et les encens créent l'atmosphère sacrée nécessaire à toute pratique spirituelle. La flamme d'une bougie concentre l'énergie et l'intention, tandis que la fumée de l'encens purifie l'espace et élève les vibrations. En voyance, allumer une bougie et brûler de l'encens avant une séance permet de se centrer et de créer une bulle protectrice propice à la connexion spirituelle.",
        items: [
            { name: "Bougies rituelles 7 couleurs", desc: "Un set de bougies pour vos rituels et méditations, chaque couleur portant une intention spécifique : rouge pour la passion, orange pour la créativité, jaune pour la confiance, vert pour l'amour, bleu pour la communication, indigo pour l'intuition et violet pour la spiritualité. Allumez la couleur qui correspond à votre besoin du moment.", link: "https://www.amazon.fr/s?k=bougies+rituelles+7+couleurs+meditation&tag=lebrunnathali-21" },
            { name: "Encens sauge blanche", desc: "La sauge blanche est la plante de purification par excellence, utilisée depuis des millénaires par les peuples autochtones d'Amérique du Nord. Sa fumée nettoie les énergies négatives stagnantes dans un lieu ou autour d'une personne. Indispensable avant une séance de voyance pour purifier l'espace et les outils de divination.", link: "https://www.amazon.fr/s?k=encens+sauge+blanche+purification+naturelle&tag=lebrunnathali-21" },
            { name: "Palo Santo", desc: "Le Palo Santo (« bois sacré ») est un arbre d'Amérique du Sud utilisé depuis des siècles par les chamanes pour ses propriétés purificatrices et protectrices. Contrairement à la sauge qui chasse les énergies négatives, le Palo Santo invite les énergies positives et créatives. Son parfum boisé et légèrement citronné est apaisant et réconfortant.", link: "https://www.amazon.fr/s?k=palo+santo+bois+sacre+naturel&tag=lebrunnathali-21" },
            { name: "Encens oliban (frankincense)", desc: "L'oliban est l'encens sacré utilisé dans les temples et les églises depuis l'Antiquité. Aussi appelé frankincense, il est reconnu pour élever la vibration spirituelle d'un espace et favoriser la méditation profonde. Son parfum résineux et envoûtant crée une atmosphère de recueillement propice aux consultations de voyance.", link: "https://www.amazon.fr/s?k=encens+oliban+frankincense+resine+naturel&tag=lebrunnathali-21" },
        ],
    },
    {
        title: "Livres Spirituels",
        emoji: "📚",
        intro: "La connaissance est le meilleur allié du praticien spirituel. Que vous souhaitiez apprendre le pendule, le tarot, la lithothérapie ou développer votre intuition, un bon livre est irremplaçable. Nous avons sélectionné des ouvrages accessibles aux débutants tout en restant suffisamment approfondis pour les personnes qui souhaitent aller plus loin dans leur pratique.",
        items: [
            { name: "Le guide du pendule", desc: "Un ouvrage complet pour apprendre la radiesthésie pas à pas : comment choisir son pendule, le purifier, établir une convention mentale, poser les bonnes questions et interpréter les mouvements. Des exercices progressifs vous accompagnent de la première prise en main jusqu'aux consultations avancées. Le livre de référence pour débuter.", link: "https://www.amazon.fr/s?k=guide+pendule+radiesthesie+livre+debutant&tag=lebrunnathali-21" },
            { name: "Le Tarot de Marseille pour les nuls", desc: "Apprendre le tarot de Marseille de manière simple et progressive. Ce livre détaille la signification de chaque arcane majeur et mineur, explique les principaux tirages (croix celtique, 3 cartes, tirage en croix) et guide l'interprétation des combinaisons. Avec de nombreuses illustrations pour reconnaître chaque carte en un coup d'œil.", link: "https://www.amazon.fr/s?k=tarot+marseille+livre+apprendre&tag=lebrunnathali-21" },
            { name: "La Bible de la lithothérapie", desc: "L'encyclopédie des pierres et cristaux : propriétés énergétiques, associations par chakra, méthodes de purification et de rechargement, et utilisations thérapeutiques. Plus de 200 pierres répertoriées avec des fiches détaillées. Un indispensable pour quiconque s'intéresse à la lithothérapie, que ce soit en complément de la voyance ou pour le bien-être personnel.", link: "https://www.amazon.fr/s?k=bible+lithotherapie+livre+pierres+cristaux&tag=lebrunnathali-21" },
            { name: "Développer son intuition", desc: "Un livre d'exercices pratiques pour éveiller et renforcer vos capacités intuitives. Méditation guidée, visualisation, écriture automatique, connexion aux rêves — chaque chapitre propose des techniques concrètes à mettre en pratique au quotidien. Idéal pour ceux qui sentent que leur sixième sens ne demande qu'à s'exprimer.", link: "https://www.amazon.fr/s?k=developper+intuition+livre+exercices&tag=lebrunnathali-21" },
            { name: "Les anges gardiens", desc: "Découvrez les 72 anges gardiens de la tradition kabbalistique : leurs noms, leurs qualités, les dates qu'ils gouvernent et les prières pour les invoquer. Ce guide complet explique comment identifier votre ange gardien personnel et établir une communication régulière avec lui. Un complément parfait à notre section Messages Angéliques.", link: "https://www.amazon.fr/s?k=anges+gardiens+livre+guide+complet&tag=lebrunnathali-21" },
        ],
    },
    {
        title: "Accessoires Spirituels",
        emoji: "✨",
        intro: "Les accessoires spirituels complètent votre pratique et sacralisent vos moments de divination. Un tapis de tirage protège vos cartes et délimite un espace sacré, un attrape-rêves filtre les visions nocturnes, une boule de cristal ouvre les portes de la clairvoyance. Ces objets ne sont pas de simples décorations — ils portent une intention et renforcent votre connexion au monde spirituel.",
        items: [
            { name: "Tapis de tirage velours", desc: "Un tapis en velours noir est l'accessoire indispensable pour vos tirages de tarot et d'oracle. Il protège vos cartes du contact direct avec la table, glisse parfaitement pour mélanger le jeu et crée une surface sacrée qui délimite l'espace de votre consultation. Le velours absorbe aussi les énergies résiduelles entre les tirages.", link: "https://www.amazon.fr/s?k=tapis+tirage+tarot+velours+noir&tag=lebrunnathali-21" },
            { name: "Attrape-rêves artisanal", desc: "L'attrape-rêves (dreamcatcher) est un objet sacré d'origine amérindienne qui filtre les rêves : les visions positives et les messages de guidance passent à travers la toile, tandis que les cauchemars sont piégés et dissous au lever du soleil. Suspendu près de votre lit, il favorise un sommeil réparateur et des rêves prémonitoires.", link: "https://www.amazon.fr/s?k=attrape+reves+artisanal+plumes+naturelles&tag=lebrunnathali-21" },
            { name: "Boule de cristal", desc: "La boule de cristal est le symbole universel de la voyance. En cristallomancie, on fixe la sphère de quartz clair pour atteindre un état méditatif où des images et des impressions se forment. C'est un outil de clairvoyance qui demande de la pratique, mais qui peut révéler des visions saisissantes. Livrée avec un support en bois ou en métal.", link: "https://www.amazon.fr/s?k=boule+cristal+quartz+voyance+meditation&tag=lebrunnathali-21" },
            { name: "Coffret rangement tarot", desc: "Une boîte en bois gravée spécialement conçue pour ranger et protéger vos jeux de tarot et d'oracle. Au-delà du rangement, ce coffret sacralise votre jeu : en le rangeant dans un écrin dédié, vous maintenez son énergie pure et le protégez des influences extérieures. Certains modèles sont gravés de motifs lunaires ou de pentacles.", link: "https://www.amazon.fr/s?k=coffret+bois+rangement+tarot+oracle&tag=lebrunnathali-21" },
        ],
    },
];

export default function BoutiquePage() {
    return (
        <>
            {/* HEADER */}
            <section className="py-16 sm:py-24 text-center relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-mystic-600/10 blur-[120px]" />
                <div className="relative z-10 max-w-3xl mx-auto px-4">
                    <div className="text-6xl mb-6">🛍️</div>
                    <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
                        Boutique <span className="text-gold-400">Spirituelle</span>
                    </h1>
                    <p className="text-mystic-300 max-w-2xl mx-auto">
                        Nous avons sélectionné avec soin les meilleurs outils pour votre pratique spirituelle :
                        pendules de radiesthésie, jeux de tarot et d&apos;oracle, pierres et cristaux de lithothérapie,
                        bougies rituelles, encens de purification et livres de référence. Chaque produit a été choisi
                        pour sa qualité et sa pertinence, que vous soyez débutant ou praticien confirmé.
                    </p>
                    <div className="mystic-divider max-w-xs mx-auto mt-6" />
                    <p className="text-mystic-500 text-xs mt-4 italic">
                        En tant que partenaire Amazon, nous percevons une commission sur les achats qualifies, sans surcout pour vous.
                    </p>
                </div>
            </section>

            {/* CATEGORIES */}
            {categories.map((cat, ci) => (
                <section key={ci} className={`py-16 sm:py-20 ${ci % 2 === 0 ? "section-purple" : "section-dark"}`}>
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <div className="text-5xl mb-4">{cat.emoji}</div>
                            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-2">
                                {cat.title}
                            </h2>
                            <div className="mystic-divider max-w-xs mx-auto mt-4" />
                            <p className="text-mystic-400 text-sm leading-relaxed max-w-2xl mx-auto mt-6">
                                {cat.intro}
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {cat.items.map((item, ii) => (
                                <div key={ii} className="glass-card p-6 flex flex-col">
                                    <h3 className="font-heading text-lg font-bold text-mystic-200 mb-2">
                                        {item.name}
                                    </h3>
                                    <p className="text-mystic-400 text-sm leading-relaxed mb-4 flex-1">
                                        {item.desc}
                                    </p>
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer sponsored"
                                        className="btn-gold text-sm py-2 px-5 justify-center w-full"
                                    >
                                        Voir sur Amazon
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            {/* CTA */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-mystic-950/50 to-[#0a0518]" />
                <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
                    <div className="text-5xl mb-6">🌙</div>
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">
                        Envie de tester vos nouveaux outils ?
                    </h2>
                    <p className="text-mystic-300 mb-8">
                        Utilisez nos outils de guidance gratuits avec vos pierres et votre pendule.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="/tirage" className="btn-gold">
                            🃏 Tirage de Cartes
                        </a>
                        <a href="/pendule-gratuit" className="btn-mystic">
                            🔮 Pendule Gratuit
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
