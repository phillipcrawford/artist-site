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
    image: "images/still_life_in_greens.jpg"
  },
  {
    id: 3,
    title: "Hey Day Window",
    medium: "Oil on canvas",
    dimensions: '27"L x 23"W',
    description: "While walking around downtown for the express purpose of finding buildings and businesses for a painting subject, I happened upon this Easter outside window of a rather new store in Bozeman. I loved everything about the way the window was set up, the objects, their placements, the color scheme, the rather hidden Easter message thus the totality of it proved to me to be an exciting possibility for a painting. I don’t remember completing a painting as quickly, as self-assuredly as this one, taken from a photo image.",
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
    description: "The subjects of these paintings, by their fealty to cell phone or computer subjugation, can alert us as to the value of resisting being so overtaken and reminding us to sharpen the ways we make choices, thereby benefitting us in terms of strengthening relationships, paying attention to our surroundings, natural or otherwise, choices some paintings allude to, while enriching our urban and/or rural lives, choosing to live more in the real moment than the virtual one. It is the virtual that readies us for AI, something to consider.",
    image: "images/subway1.jpg"
  },
  {
    id: 9,
    title: "One Asian Gal In Car 240",
    medium: "Oil on canvas",
    dimensions: '30" L x 24" W',
    description: "",
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
  },
  {
    id: 13,
    title: "Hill Street Tanagers",
    medium: "Oil on canvas",
    dimensions: '36" L x 24" W',
    description: "price, $3,000\n" +
                 "Hill Street Tanager\n" +
                 "June Billings Safford\n" +
                 "I think of myself as a colorist, abstaining from using color direct from the tube, even taking the time to mix my grays from a host of color-squeezed opposites. I love to paint with shades I discover. What I, and perhaps many contemporary painters, hope for is the joy of surprise, the unexpected as a goal; giving up control is the name of our pursuit.\n" +
                 "Most recently following my husband’s passing, I have given thought to blending some definable painterly elements along with some unexpected strokes, by choosing to integrate three specific elements within the lovely chaos in a series of paintings. These elements are: a bird, a window, and binoculars to honor my birder husband’s final predicament after being diagnosed with Parkinson’s, the restriction of birding from inside. This painting is the 8th in a series.\n" +
                 "Wherever his vision lands\n" +
                 "I stock the feeders on the deck\n" +
                 "daily, black-oiled sunflower seeds\n" +
                 "which lure the chickadees and finches\n" +
                 "into the magnifying glass\n" +
                 "of the binoculars my husband holds\n" +
                 "as he swivels in the black recliner\n" +
                 "his private airport\n" +
                 "thanks to the bay windows\n" +
                 "raking in wherever his vision lands.\n" +
                 "One day he hopes a stray bird\n" +
                 "will find the border of our deck\n" +
                 "to spread surprise across his scope.\n" +
                 "It’s migratory season and along with this\n" +
                 "unexpected disease will come, he hopes,\n" +
                 "a bird as lost as he and wouldn’t you know,\n" +
                 "on a Tuesday he clamors for his Peterson Guide\n" +
                 "to certify that what we have on a limb\n" +
                 "of a juniper close by is a White Winged Dove\n" +
                 "such an undeserved distance from home.",
    image: "images/safford_bird_watching.jpg"
  },
  {
    id: 14,
    title: "Hill Street Stellars Jay",
    medium: "Oil on canvas",
    dimensions: '28 1/2" L x 23 1/2" W',
    description: "",
    image: "images/hill_street_stellars_jay.jpg"
  },
];
/*
  {
    id: 10,
    title: "Bozeman From The Heart",
    medium: "Oil on canvas",
    dimensions: '30" x 40"',
    description: "A coffee table book published in 2019 which has gone through two printings and is now sold out. Bozeman became a subject for me to paint the day a fellow artist spoke about her impending trip to Tuscany to paint its charming towns. I only had to look around on Main Street to find our own very charming town as a subject. I spent five years painting a total of 47 paintings, oil and watercolor, before the text by Bozeman’s outstanding writers followed. Most of the originals have found buyers. There remains about ten that are available.",
    image: "images/BFTH.jpg"
  }
];
*/