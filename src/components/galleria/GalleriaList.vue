<template>
	<section class="mx-auto pt-4">
        <PaintingItem v-for="paint in paintings" :key="paint.id" :img="paint.smImage" :title="paint.title" :author="paint.author"/>
    </section>
</template>

<script lang="ts">
import Painting from "../../classes/Painting";
import ListOfPaintings from "../../types/ListOfPaintings";
// paint 1
import img1Lg from "../../assets/images/imgs-lg/img1-lg.png";
import img1Sm from "../../assets/images/imgs-sm/img1-sm.png";
import authorGogh from "../../assets/images/imgs-author/gogh.png";
// paint 2
import img2Lg from "../../assets/images/imgs-lg/img2-lg.png";
import img2Sm from "../../assets/images/imgs-sm/img2-sm.png";
import authorRembrandt from "../../assets/images/imgs-author/rembrandt.png";
// paint 3
import img3Lg from "../../assets/images/imgs-lg/img3-lg.png";
import img3Sm from "../../assets/images/imgs-sm/img3-sm.png";
import authorDavinci from "../../assets/images/imgs-author/davinci.png";
// paint 4
import img4Lg from "../../assets/images/imgs-lg/img4-lg.png";
import img4Sm from "../../assets/images/imgs-sm/img4-sm.png";
import authorCezanne from "../../assets/images/imgs-author/cezanne.png";
// paint 5
import img5Lg from "../../assets/images/imgs-lg/img5-lg.png";
import img5Sm from "../../assets/images/imgs-sm/img5-sm.png";
import authorVermeer from "../../assets/images/imgs-author/vermeer.png";
// paint 6
import img6Lg from "../../assets/images/imgs-lg/img6-lg.png";
import img6Sm from "../../assets/images/imgs-sm/img6-sm.png";
import authorHokusai from "../../assets/images/imgs-author/hokusai.png";
// paint 7
import img7Lg from "../../assets/images/imgs-lg/img7-lg.png";
import img7Sm from "../../assets/images/imgs-sm/img7-sm.png";
// van gogh
// paint 8
import img8Lg from "../../assets/images/imgs-lg/img8-lg.png";
import img8Sm from "../../assets/images/imgs-sm/img8-sm.png";
import authorEyck from "../../assets/images/imgs-author/eyck.png";
// paint 9
import img9Lg from "../../assets/images/imgs-lg/img9-lg.png";
import img9Sm from "../../assets/images/imgs-sm/img9-sm.png";
import authorPicasso from "../../assets/images/imgs-author/picasso.png";
// paint 10
import img10Lg from "../../assets/images/imgs-lg/img10-lg.png";
import img10Sm from "../../assets/images/imgs-sm/img10-sm.png";
// van gogh
// paint 11
import img11Lg from "../../assets/images/imgs-lg/img11-lg.png";
import img11Sm from "../../assets/images/imgs-sm/img11-sm.png";
// da vinci
// paint 12
import img12Lg from "../../assets/images/imgs-lg/img12-lg.png";
import img12Sm from "../../assets/images/imgs-sm/img12-sm.png";
import authorGentileschi from "../../assets/images/imgs-author/gentileschi.png";
// paint 13
import img13Lg from "../../assets/images/imgs-lg/img13-lg.png";
import img13Sm from "../../assets/images/imgs-sm/img13-sm.png";
import authorRousseau from "../../assets/images/imgs-author/rousseau.png";
// paint 14
import img14Lg from "../../assets/images/imgs-lg/img14-lg.png";
import img14Sm from "../../assets/images/imgs-sm/img14-sm.png";
// cezanne
// paint 15
import img15Lg from "../../assets/images/imgs-lg/img15-lg.png";
import img15Sm from "../../assets/images/imgs-sm/img15-sm.png";
import authorFragonard from "../../assets/images/imgs-author/fragonard.png";

import PaintingItem from "./PaintingItem.vue";

import { defineComponent, ref } from "vue";
export default defineComponent({
	name: "GalleriaList",
    components: {
        PaintingItem,
    },
	setup() {
		const paintings = ref<ListOfPaintings>([]);

		paintings.value = [
			new Painting(
				"Starry Night",
				"Vincent van Gogh",
				authorGogh,
				1889,
				'Although The Starry Night was painted during the day in Van Gogh\'s ground-floor studio, it would be inaccurate to state that the picture was painted from memory. The view has been identified as the one from his bedroom window, facing east, a view which Van Gogh painted variations of no fewer than twenty-one times, including The Starry Night. "Through the iron-barred window," he wrote to his brother, Theo, around 23 May 1889, "I can see an enclosed square of wheat ... above which, in the morning, I watch the sun rise in all its glory."',
				img1Lg,
				img1Sm,
				"https://en.wikipedia.org/wiki/The_Starry_Night",
				"paint1"
			),

			new Painting(
				"The Storm on the Sea of Galilee",
				"Rembrandt",
				authorRembrandt,
				1633,
				"The painting, in vertical format, shows a close-up view of Christ's disciples struggling frantically against the heavy storm to regain control of their fishing boat. A huge wave beats the bow and rips the sail. One of the disciples is seen vomiting over the side. Another one, looking directly out at the viewer, is a self-portrait of the artist. Only Christ, depicted on the right, remains calm.",
				img2Lg,
				img2Sm,
				"https://en.wikipedia.org/wiki/The_Storm_on_the_Sea_of_Galilee",
				"paint2"
			),

            new Painting(
                'Lady with an Ermine',
                'Leonardo da Vinci',
                authorDavinci,
                1489,
                "The Lady with an Ermine (Italian: Dama con l'ermellino [ˈdaːma kon lermelˈliːno]; Polish: Dama z gronostajem) is a portrait painting widely attributed to the Italian Renaissance artist Leonardo da Vinci. Dated to c. 1489–1491, the work is painted in oils on a panel of walnut wood. Its subject is Cecilia Gallerani, a mistress of Ludovico Sforza (\"Il Moro\"), Duke of Milan; Leonardo was painter to the Sforza court at the time of its execution. It is one of only four surviving portraits of women painted by Leonardo, the others being Ginevra de' Benci, La Belle Ferronnière and the Mona Lisa.",
                img3Lg,
                img3Sm,
                "https://en.wikipedia.org/wiki/Lady_with_an_Ermine",
                "paint3"
            ),

            new Painting(
                'The boy in the red vest',
                'Paul Cézanne',
                authorCezanne,
                1889,
                "Cézanne painted four oil portraits of this Italian boy in the red vest, all in different poses, which allowed him to study the relationship between the figure and space. The most famous of the four, and the one commonly referred to by this title, is the one which depicts the boy in a melancholic seated pose with his elbow on a table and his head cradled in his hand. It is currently held in Zürich, Switzerland. The other three portraits, of different poses, are in museums in the US.",
                img4Lg,
                img4Sm,
                "https://en.wikipedia.org/wiki/The_Boy_in_the_Red_Vest",
                "paint4"
            ),

			new Painting(
				"Girl with a Pearl Earring",
				"Johannes Vermeer",
				authorVermeer,
				1665,
				"The painting is a tronie, the Dutch 17th-century description of a 'head' that was not meant to be a portrait. It depicts a European girl wearing an exotic dress, an oriental turban, and what was thought to be a very large pearl as an earring. In 2014, Dutch astrophysicist Vincent Icke raised doubts about the material of the earring and argued that it looks more like polished tin than pearl on the grounds of the specular reflection, the pear shape and the large size of the earring.",
				img5Lg,
				img5Sm,
				"https://en.wikipedia.org/wiki/Girl_with_a_Pearl_Earring",
				"paint5"
			),

            new Painting(
                'The Great Wave off Kanagawa',
                'Hokusai',
                authorHokusai,
                1831,
                "The Great Wave off Kanagawa (Japanese: 神奈川沖浪裏, Hepburn: Kanagawa-oki Nami Ura, lit. \"Under the Wave off Kanagawa\"), also known as The Great Wave or simply The Wave, is a woodblock print by the Japanese ukiyo-e artist Hokusai. It was published sometime between 1829 and 1833 in the late Edo period as the first print in Hokusai's series Thirty-six Views of Mount Fuji. The image depicts an enormous wave threatening three boats off the coast in the Sagami Bay (Kanagawa Prefecture) while Mount Fuji rises in the background.",
                img6Lg,
                img6Sm,
                "https://en.wikipedia.org/wiki/The_Great_Wave_off_Kanagawa",
                "paint6"
            ),

            new Painting(
                "The Night Cafe",
                "Vincent van Gogh",
                authorGogh,
                1888,
                "The Night Café (French: Le Café de nuit) is an oil painting created by Dutch artist Vincent van Gogh in September 1888 in Arles. Its title is inscribed lower right beneath the signature. The painting is owned by Yale University and is currently held at the Yale University Art Gallery in New Haven, Connecticut. The interior depicted is the Café de la Gare, 30 Place Lamartine, run by Joseph-Michel Ginoux and his wife Marie, who in November 1888 posed for Van Gogh's and Gauguin's Arlésienne; a bit later, Joseph Ginoux evidently posed for both artists, too.",
                img7Lg,
                img7Sm,
                "https://en.wikipedia.org/wiki/The_Night_Caf%C3%A9",
                "paint7"
            ),

            new Painting(
                "Armoflini Portrait",
                "Jan van Eyck",
                authorEyck,
                1432,
                "It is considered one of the most original and complex paintings in Western art, because of its beauty, complex iconography, geometric orthogonal perspective, and expansion of the picture space with the use of a mirror. According to Ernst Gombrich \"in its own way it was as new and revolutionary as Donatello's or Masaccio's work in Italy. A simple corner of the real world had suddenly been fixed on to a panel as if by magic ... For the first time in history the artist became the perfect eye-witness in the truest sense of the term\".",
                img8Lg,
                img8Sm,
                "https://en.wikipedia.org/wiki/Arnolfini_Portrait",
                "paint8"
            ),

            new Painting(
                "Guernica",
                "Pablo Picasso",
                authorPicasso,
                1937,
                "The scene occurs within a room where, on the left, a wide-eyed bull stands over a grieving woman holding a dead child in her arms. In the center of the room a horse falls in agony with a large gaping hole in its side, as if it had just been run through by a spear or javelin. The horse appears to be wearing chain mail armor, decorated with vertical tally marks arranged in rows. A dead and dismembered soldier lies under the horse. The hand of his severed right arm grasps a shattered sword, from which a flower grows.",
                img9Lg,
                img9Sm,
                "https://en.wikipedia.org/wiki/Guernica_(Picasso)",
                "paint9"
            ),

            new Painting(
                "Van Gogh Self-portrait",
                "Vincent van Gogh",
                authorGogh,
                1889,
                "This self-portrait was one of about 32 produced over a 10-year period, and these were an important part of his work as a painter; he painted himself because he often lacked the money to pay for models. He took the painting with him to Auvers-sur-Oise, near Paris, where he showed it to Dr. Paul Gachet, who thought it was \"absolutely fanatical\". Art historians are divided as to whether this painting or Self-portrait without beard is Van Gogh's final self-portrait. The art historians Ingo F. Walther and Jan Hulsker consider this to be the last.",
                img10Lg,
                img10Sm,
                "https://en.wikipedia.org/wiki/Self-portraits_by_Vincent_van_Gogh",
                "paint10"
            ),

            new Painting(
                "Mona Lisa",
                "Leonardo da Vinci",
                authorDavinci,
                1503,
                "The Mona Lisa (/ˌmoʊnə ˈliːsə/; italian: La Gioconda [la dʒoˈkonda] or Monna Lisa [ˈmɔnna ˈliːza]) is a half-length portrait painting by Italian artist Leonardo da Vinci. Considered an archetypal masterpiece of the Italian Renaissance, it has been described as \"the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world\". The painting's novel qualities include the subject's enigmatic expression, the monumentality of the composition, the subtle modelling of forms, and the atmospheric illusionism.",
                img11Lg,
                img11Sm,
                "https://en.wikipedia.org/wiki/Mona_Lisa",
                "paint11"
            ),

            new Painting(
                "Penitent Magdalene",
                "Artemisia Gentileschi",
                authorGentileschi,
                1625,
                "Penitent Magdalene is a painting by the Italian artist Artemisia Gentileschi. It hangs in Seville Cathedral. It has probably been in the cathedral since the late 17th century. The painting's first home was the collection of Fernando Enriquez Afan de Ribera, from 1626 to 1637. She returned to the subject later in the 1620s in Mary Magdalene as Melancholy.",
                img12Lg,
                img12Sm,
                "https://en.wikipedia.org/wiki/Penitent_Magdalene_(Artemisia_Gentileschi)",
                "paint12"
            ),

            new Painting(
                "The Sleeping Gypsy",
                "Henri Rousseau",
                authorRousseau,
                1897,
                "The Sleeping Gypsy (French: La Bohémienne endormie) is an 1897 oil painting by French Naïve artist Henri Rousseau (1844–1910). It is a fantastical depiction of a lion musing over a sleeping woman on a moonlit night. Rousseau first exhibited the painting at the 13th Salon des Indépendants, and tried unsuccessfully to sell it to the mayor of his hometown, Laval. Instead, it entered the private collection of a Parisian charcoal merchant where it remained until 1924, when it was discovered by the art critic Louis Vauxcelles.",
                img13Lg,
                img13Sm,
                "https://en.wikipedia.org/wiki/The_Sleeping_Gypsy",
                "paint13"
            ),

            new Painting(
                'The Basket of Apples',
                'Paul Cézanne',
                authorCezanne,
                1895,
                "The Basket of Apples (French: Le panier de pommes) is a still life oil painting by French artist Paul Cézanne, which he created c. 1893. The painting is particularly remarkable for its creative composition, which rejected realistic representation in favour of distorting objects to create multiple perspectives. This approach eventually influenced other art movements, including Fauvism and Cubism. It belongs to the Helen Birch Bartlett Memorial Collection of the Art Institute of Chicago.",
                img14Lg,
                img14Sm,
                "https://en.wikipedia.org/wiki/The_Basket_of_Apples",
                "paint14"
            ),

            new Painting(
                "The Swing",
                "Jean-Honoré Fragonard",
                authorFragonard,
                1767,
                "The painting depicts an elegant young woman on a swing. A smiling young man, hiding in the bushes on the left, watches her from a vantage point that allows him to see up into her billowing dress, where his arm is pointed with hat in hand. A smiling older man, who is nearly hidden in the shadows on the right, propels the swing with a pair of ropes. The older man appears to be unaware of the young man. As the young lady swings high, she throws her left leg up, allowing her dainty shoe to fly through the air.",
                img15Lg,
                img15Sm,
                "https://en.wikipedia.org/wiki/The_Swing_(painting)",
                "paint15"
            ),
		];

		console.log(paintings.value);

		return {
			paintings,
		};
	},
});
</script>

<style scoped>
section{
    max-width: 1380px;
    max-height: 1600px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    column-gap: 40px;
}
</style>
