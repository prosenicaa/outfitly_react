import Image1 from '../../assets/outfit1.jpg'
import Image2 from '../../assets/outfit2.jpg'
import Image3 from '../../assets/outfit3.jpg'
import Image4 from '../../assets/outfit4.jpg'
import Image5 from '../../assets/outfit5.jpg'
import Image6 from '../../assets/outfit6.jpg'
import Image7 from '../../assets/outfit7.jpg'
import Image8 from '../../assets/outfit8.jpg'
import Image9 from '../../assets/outfit9.jpg'

const data = [
    {
        id: 1,
        category: 'autumn',
        image: Image1,
        title: 'Cozy Street Elegance',
        desc: 'Effortless city charm meets autumn warmth. A wool overcoat layered with rich browns and soft knits for a timeless, cozy street look.',
        look: 'https://www.zara.com/rs/sr/dugi-kaput-na-preklop-od-vune-p04070222.html?v1=476719065&v2=2419032',
        similar: 'https://www.stradivarius.com/rs/zenske-snizenje-n3215?srsltid=AfmBOorlwOalcLUvBGXZfP2-Tt0ulHX1n54XKNyGOcwnpnAowTrO3vSz'
    },
    {
        id: 2,
        category: 'autumn',
        image: Image2,
        title: 'Minimal Autumn Layers',
        desc: 'Clean lines and neutral tones create a polished yet comfortable ensemble — perfect for those crisp fall mornings in the city.',
        look: 'https://www.zara.com/rs/sr/mekani-kaput-oversize-kroja-p03046298.html?v1=495385744&v2=2419032',
        similar: 'https://www.stradivarius.com/rs/zenske-snizenje-n3215?srsltid=AfmBOorlwOalcLUvBGXZfP2-Tt0ulHX1n54XKNyGOcwnpnAowTrO3vSz'
    },
    {
        id: 3,
        category: 'autumn',
        image: Image3,
        title: 'Modern Monochrome',
        desc: 'A sleek ivory coat paired with bold boots creates a refined and fashion-forward look — a perfect blend of modern sophistication and timeless elegance.',
        look: 'https://www.zara.com/rs/sr/poludugi-kaput-na-preklop-od-bukle-tkanine-p08073328.html?v1=464424212&v2=2419032',
        similar: 'https://www.stradivarius.com/rs/zenske-snizenje-n3215?srsltid=AfmBOorlwOalcLUvBGXZfP2-Tt0ulHX1n54XKNyGOcwnpnAowTrO3vSz'
    },
    {
        id: 4,
        category: 'elegant',
        image: Image4,
        title: 'City Power Suit',
        desc: 'A modern tailored suit that blends confidence and grace. Perfect for commanding attention while keeping a sleek, effortless look.',
        look: 'https://www.zara.com/rs/sr/sako-sa-naramenicama-i-kaisem-p08985560.html?v1=480490890&v2=2420942',
        similar: 'https://www.stradivarius.com/rs/zenske-snizenje-n3215?srsltid=AfmBOorlwOalcLUvBGXZfP2-Tt0ulHX1n54XKNyGOcwnpnAowTrO3vSz'
    },
        {
        id: 5,
        category: 'elegant',
        image: Image5,
        title: 'Relaxed Tailored Charm',
        desc: 'Soft structure meets quiet confidence in this chic interpretation of classic tailoring — a refined balance between professional sophistication and effortless elegance.',
        look: 'https://www.zara.com/rs/sr/blejzer-sa-naramenicama--prugama-i-tankim-kaisem-p02010722.html?v1=463291453&v2=2420942',
        similar: 'https://www.stradivarius.com/rs/zenske-snizenje-n3215?srsltid=AfmBOorlwOalcLUvBGXZfP2-Tt0ulHX1n54XKNyGOcwnpnAowTrO3vSz'
    },
    {
        id: 6,
        category: 'casual',
        image: Image6,
        title: 'Urban Ease',
        desc: 'Soft textures meet city energy. This monochrome brown set delivers comfort with a sleek, confident edge for your everyday strolls.',
        look: 'https://www.zara.com/rs/sr/interlok-zvonaste-pantalone-p03641851.html?v1=496910336&v2=2467841',
        similar: 'https://www.stradivarius.com/rs/zenske-snizenje-n3215?srsltid=AfmBOorlwOalcLUvBGXZfP2-Tt0ulHX1n54XKNyGOcwnpnAowTrO3vSz'
    },
    {
        id: 7,
        category: 'casual',
        image: Image7,
        title: 'Coastal Comfort',
        desc: 'Light, breezy, and relaxed — perfect for peaceful days by the shore or cozy moments at home. Effortless style meets serenity.',
        look: 'https://www.zara.com/rs/sr/isprane-pantalone-p03253346.html?v1=452729531&v2=2467841',
        similar: 'https://www.stradivarius.com/rs/zenske-snizenje-n3215?srsltid=AfmBOorlwOalcLUvBGXZfP2-Tt0ulHX1n54XKNyGOcwnpnAowTrO3vSz'
    },
    {
        id: 8,
        category: 'casual',
        image: Image8,
        title: 'Effortless Cool',
        desc: 'An oversized hoodie paired with classic denim — casual doesn’t mean careless. This look defines laid-back confidence with a touch of street chic.',
        look: 'https://www.zara.com/rs/sr/mekana-dukserica-sa-kapuljacom-p04174671.html?v1=471071388&v2=2467841',
        similar: 'https://www.stradivarius.com/rs/zenske-snizenje-n3215?srsltid=AfmBOorlwOalcLUvBGXZfP2-Tt0ulHX1n54XKNyGOcwnpnAowTrO3vSz'
    },
    {
        id: 9,
        category: 'casual',
        image: Image9,
        title: 'Neutral Flow',
        desc: 'Layered neutrals in soft fabrics create a timeless, easygoing outfit that blends seamlessly into any setting — minimalist and endlessly wearable.',
        look: 'https://www.zara.com/rs/sr/mekana-dukserica-sa-kapuljacom-p04174671.html?v1=471071389&v2=2467841',
        similar: 'https://www.stradivarius.com/rs/zenske-snizenje-n3215?srsltid=AfmBOorlwOalcLUvBGXZfP2-Tt0ulHX1n54XKNyGOcwnpnAowTrO3vSz'
    }
]

export default data