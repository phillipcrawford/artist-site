const paintings = [
  {
    id: 1,
    title: "Yellow Watering Can",
    medium: "Oil on canvas",
    dimensions: '40"L x 30"W',
    description: "Painting this still-life brought me much pleasure and taught me a few painting insights. The first was the value of beginning with an underpainting, usually an acrylic color, before tackling any details. For this piece I tinted purple with some white and, in this case, the coolness of that color electrified the large central object, a yellow watering can. The yellow began to glow as I painted over the cool purple. For the first time, I had to deal with reflective properties of a metal bowl and with highlights to make the metal metallic. Such joy before my very eyes. Behind the various objects chosen by artist mentor Diana Tremaine, as she staged this particular still-life, she included a patterned woolen blanket as backdrop: its tactile presence in the multi-level arrangement challenged this painter. The Yellow Watering Can is a painting over which a viewer might linger to discover a multitude of objects and the play of yellows, purples and reds.",
    image: "images/yellow_watering_can.jpg"
  },  
  {
    id: 2,
    title: "Still Life in Greens",
    medium: "Oil on canvas",
    dimensions: '29"L x 23"W',
    description: "While painting in Diana Tremaine’s studio, she suggested I treat a still life I was about to paint to brush strokes that mirrored Cezanne’s. I loved consciously adopting Cezanne’s brush dance on this canvas, his charming ways of accenting color by outlining objects only slightly. Hardly any dead, flat spaces of color. They all shimmer, alive with accented brush marks. His background colors vie for the attention of foreground ones. Color for Cezanne, takes on the importance of form. Intuitively, I too have most often, in early works as well as present ones, sublimated form, and sought to make color dominant.",
    image: "images/still_life_in_greens_2.jpg"
  },
  {
    id: 3,
    title: "Hey Day Window",
    medium: "Oil on canvas",
    dimensions: '27"L x 23"W',
    description: "",
    image: "images/hey_day_window_original.jpg"
  },
  {
    id: 4,
    title: "Flowers on the Altar",
    medium: "Oil on canvas",
    dimensions: '26"L x 20"W',
    description: "For many years I donated money to our church for flowers on the altar to commemorate my husband Jeff's birthday.",
    image: "images/flowers_on_the_altar.jpg"
  },
  {
    id: 5,
    title: "Yellow Bouquet",
    medium: "Oil on canvas",
    dimensions: '30"L x 24"W',
    description: "Flowers sent to me on my 70th birthday from my brother Jon who lives on Long Island. It is a painting that was painted over a nude I had formerly painted, hence vestiges of skin color in areas around the vase.",
    image: "images/yellow_bouquet.jpg"
  },
  {
    id: 6,
    title: "Peppers",
    medium: "Oil on canvas",
    dimensions: '24" L x 30" W',
    description: "This still life was set up in the studio of artist, Diana Tremaine. I have had the pleasure of working with her and several other artists in her studio over several years. She has much to do with my development as an artist. I loved concentrating on the Reds in the red bell pepper and finding the form as I painted. This painting has been sold. But Giclees are available. ",
    image: "images/peppers.jpg"
  },
  {
    id: 7,
    title: "Texting At The MOMA",
    medium: "Oil on canvas",
    dimensions: '20" L x 16" W',
    description: "I envision a gallery show, entitled: STILL LIFES & STILL LIVES : A NEXUS. I envision the show being half traditional Still Life in oils and also a similar number of oils showcasing people enabled by their attachment to cell phones or computers… people who can readily be considered Still Live’s, thus a nexus. This is a show that encourages more than artistic ways of seeing; it asks the viewers to consider the implications of calling the human subjects still lives, and in so doing leading the viewer to cast judgement upon the scenes at hand, the way the elderly gent in the MOMA proffers indignation. In truth, the painter herself chose these subjects, ironically photographing with my cell phone, as examples of contemporary humankind’s undergoing capture by technology. They, we, find it difficult to resist the ways the media subdues our attention, of which there is a finite amount. ",
    image: "images/still_lifes_still_lives.jpg"
  },
  {
    id: 8,
    title: "Three Distracted People",
    medium: "Oil on canvas",
    dimensions: '24" L x 30" W',
    description: "The subjects of these paintings, by their to cell phone or computer subjugation, can alert us as to the value of resisting being so overtaken and reminding us to sharpen the ways we make choices, thereby benefitting us in terms of strengthening relationships, paying attention to our surroundings, natural or otherwise, choices the paintings allude to, while enriching our urban and/or environmental lives, living more in the real moment than the virtual one. It is the virtual that readies us for Ai, something to consider.",
    image: "images/subway1.jpg"
  },
  {
    id: 9,
    title: "One Asian Gal In Car 240",
    medium: "Oil on canvas",
    dimensions: '30" L x 24" W',
    description: "Still Lifes are captivating themselves. There is a stillness into which the viewer is invited to partake. Brush strokes and color take on new precedence, as the singleness of the subject calls for added attention. Simple beauty still feeds us. People intently focused on their screens and silenced by them usher forth that same stillness. Such inactivity, save for finger dancing, brings them/us closer to the placidity of a painting of a vase of flowers, a plate with objects of fruit than the subject we term “alive.” I paint lovingly, nonetheless. These portraits represent this time in the human continuum, while the Still Lifes harken us back to our halcyon days.",
    image: "images/subway2.jpg"
  },
  {
    id: 10,
    title: "When the iphone rings At The De Grazia Museum",
    medium: "Oil on canvas",
    dimensions: '19" L x 15" W',
    description: "",
    image: "images/when_the_iphone_rings.jpg"
  },
  {
    id: 11,
    title: "She Can't Hear Water Falling",
    medium: "Oil on canvas",
    dimensions: '19" L x 15" W',
    description: "",
    image: "images/she_cant_hear_water_falling.jpg"
  },
  {
    id: 12,
    title: "Gripped By Two Worlds",
    medium: "Oil on canvas",
    dimensions: '19" W x 15" L',
    description: "",
    image: "images/gripped_by_two_worlds.jpg"
  }
];
/*
  {
    id: 10,
    title: "Bozeman From The Heart",
    medium: "Oil on canvas",
    dimensions: '30" x 40"',
    description: "A coffee table book published in 2019 which has gone through two printings and is now sold out. Bozeman became a subject for me to paint the day a fellow artist spoke about her impending trip to Tuscany to paint its charming towns. I only had to look around on Main Street to find our own very charming town as a subject. I spent five years painting a total of 47 paintings, oil and watercolor, before the text by Bozeman’s outstanding writers followed. Most of the originals have found buyers. There remains about ten that are available.",
    image: "images/BFTH.jpg"
  },
  {
    id: 11,
    title: "Dennis",
    medium: "Oil on canvas",
    dimensions: '30" x 40"',
    description: "A contemplative view of frozen creeks and quiet woods. The stillness of winter is rendered with subtle color harmonies.",
    image: "images/cat4.jpg"
  },
  {
    id: 12,
    title: "Elliot",
    medium: "Oil on canvas",
    dimensions: '30" x 40"',
    description: "A contemplative view of frozen creeks and quiet woods. The stillness of winter is rendered with subtle color harmonies.",
    image: "images/cat2.jpg"
  },
  {
    id: 13,
    title: "Ferdinand",
    medium: "Oil on canvas",
    dimensions: '30" x 40"',
    description: "A contemplative view of frozen creeks and quiet woods. The stillness of winter is rendered with subtle color harmonies.",
    image: "images/cat3.jpg"
  }
  // Add more paintings as needed
];
*/