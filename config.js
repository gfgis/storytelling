var config = {
    style: 'mapbox://styles/giuls0917/ckl18y5vj08ss17m825aa49kp',
    accessToken: 'pk.eyJ1IjoiZ2l1bHMwOTE3IiwiYSI6ImNranlqM2RpYzBzMTcybm53NDcyMHhleWwifQ.qqOs_Y1d36x-WQYI_sww5g',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: true,
    title: "Barcelona: a case for biodiversity",
    subtitle: "The role of the Besòs river",
    byline: 'By Giulia Ferrari',
    chapters: [
        {
            id: 'Global',
            alignment: 'left',
            hidden: false,
            title: 'Cities growth as a problem for biodiversity',
            image: 'https://i1.wp.com/urbantechprogram.io/wp-content/uploads/graph2.jpg?resize=1024%2C512&ssl=1',
            description: "The percentage of urban areas has been growing significantly since 1950 with respect to rural areas.<br><br> Sadly this often causes biodiversity to decline - as cities grow habitat for flora and fauna become fragmented or even get destroyed. As a consequence many species are put in danger or on the verge of local extiction.<br><br>Green spaces play a key role into preserving biodiversity with their ability to break up urban fabric.",
            location: {
                center: [6.296448, 35.881480],
                zoom: 1.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'urbanareas1-1-75np2q',
                opacity: 1,
                duration: 5000
            }
            ],
            onChapterExit: [
                {

                    layer: 'construcciones-72o4nf',
                    opacity: 0.9

                }
            ]
        },
        {
            id: 'Barcelona_closeup',
            alignment: 'right',
            hidden: false,
            title: "The case of Barcelona",
            image: 'assets/densitat.png',
            description: "As one of the biggest and more densely populated city of Europe (16,420 inhabitants/squared Km), Barcelona faces a great challenge when it comes to mantaining and protecting its original biodiversity especially when trying to satisfy at the same time the city's needs as well as those of its inhabitants.",
            location: {
                center: [2.16573, 41.374144],
                zoom: 16.3,
                pitch: 74,
                bearing: 30.4
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [{
                layer: 'construcciones-72o4nf',
                opacity: 0.9
            }],
            onChapterExit: [{
                layer: 'construcciones-72o4nf',
                opacity: 0.9
            }]
        },
        {
            id: 'Rivers',
            alignment: 'left',
            hidden: false,
            title: "A city between two rivers",
            image: 'assets/riverok.png',
            description: "The rivers Llobregat and Besòs (highlighted in purple) mark the two borders of Barcelona. They played a key role in its development, particularly during its industrial expansion.<br><br>They are very appealing to medium/large industries which have caused a devastating impact on their waters generating a significant reduction of biodiversity in them and along their shores.<br><br>This picture from 1986 clearly shows how plants (in red) tend to pick a location as close as possible to the Besòs river and its shores (in blue and yellow respectively).",
            location: {
                center: [2.158, 41.372],
                zoom: 11.2,
                pitch: 52,
                bearing: -48.8
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'rios-4dvp5l',
                opacity: 0.9
            }],
            onChapterExit: []
        },
        {
            id: 'Besos',
            alignment: 'left',
            hidden: false,
            title: "Besòs river",
            image: 'assets/parquefluvial.jpg',
            description: "In the case of the Besòs river, it was only in 1995 that a cooperation agreement was signed between the various neighboring municipalities for the environmental recovery of the river. <br><br>Its rehabilitation process consists mainly in the creation of a river park (shown in green on the map) which acts both as a civic axis as well as biotope where to introuce floristical species typical of wetlands on the river's edges such as reeds and grass (shown in orange).",
            location: {
                center: [2.22418, 41.42801],
                zoom: 13.8,
                pitch: 52,
                bearing: -57
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'parc-besos-bck9pf',
                opacity: 1.0
            }],
            onChapterExit: []
        },
        {
            id: 'Besos_closeup',
            alignment: 'right',
            hidden: false,
            title: "Wetlands",
            image: 'assets/rizoma.PNG',
            description: "Wetlands are also useful in order to reduce soil and water pullution (plant roots act as a drainage system and reduce impurities) caused by this purification plant, located on the right bank of the river.",
            location: {
                center: [2.191, 41.472],
                zoom: 15.8,
                pitch: 34.2,
                bearing: 64
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'flora-besos-7ss2rl',
                opacity: 0.9
            }],
            onChapterExit: []
        },
        {
            id: 'Besos_last',
            alignment: 'right',
            hidden: false,
            title: "Wetlands in the estuary",
            image: 'assets/Charadriusdubius.jpg',
            description: "This part of the river, which had a great recovery of its wetlands, is exclusively dedicated to fauna and flora, that is, the function of civic axis which extends throughout the rest of the river's route, ceases to exist to make room for the restoration of certain species that need an isolated space (for nesting, for example in the case of birds such as Charadrius dubius represented in the picture) from human intervention.",
            location: {
                center: [2.231, 41.421],
                zoom: 16.5,
                pitch: 58,
                bearing: -54
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'flora-besos-7ss2rl',
                opacity: 0.9
            }],
            onChapterExit: []
        }
    ]
};