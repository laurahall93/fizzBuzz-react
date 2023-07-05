import BlogEntry from "./BlogEntry";
import {BlogEntryData} from "./BlogEntry";

const blogEntries: BlogEntryData[] =[
 {   
    title: "Cat Cafe",
    name: "Maison de Moggy",
    country: "Scotland, Edinburgh",
    image: "https://i2-prod.edinburghlive.co.uk/incoming/article15252592.ece/ALTERNATES/s1200c/0_cat-edinbrgh.jpg",
    location: "https://goo.gl/maps/fsSPwkDvXUbwnd7n8",
    description: "Bright, relaxed cafe with wicker furniture and 12 resident cats, serving tea, coffee and cakes.",
 },
 {
    title: "Place to visit",
    name: "South Loch Ness Trail",
    country: "Scotland",
    image: "https://www.walkhighlands.co.uk/lochness/7_2/7_2_5l.JPG",
    location: "https://goo.gl/maps/7CZKa2RdU7BKyzh26",
    description: "The South Loch Ness Trail meanders its way for 58km down the south side of Loch Ness from Torbreck near Inverness to Fort Augustus on a mixture of minor roads, forest tracks and purpose-built trail. To walk, cycle (mountain bike only) or ride this trail is a fantastic experience. It has what every long-distance trail should have  spectacular views, historical interest and peace and quiet...",
             
 },
 {
    title:"Closer to heart",
    name:"Sigulda",
    country:"Latvija",
    image:"https://cdn.getyourguide.com/img/location/5d15cb132cd86.jpeg/75.jpg",
    location:"https://goo.gl/maps/SeHbD3kThr7xQvwa7",
    description:"Sigulda in Latvia is an ancient town just 55 kilometers northeast of the capital Riga. It is in the Vidzeme region and is located within the borders of Gauja National park. Among locals it is already a popular adventure and outdoor destination. Foreigners also increasingly visit Sigulda, but mostly as a day trip from Riga.",

 },
 {
    title:"Little bit exotic",
    name:"Sao Miguel",
    country:"Portugal",
    image:"https://lp-cms-production.imgix.net/features/2019/05/sao-miguel-azores-sete-cidades-9b39e38c9a05.jpg?auto=format&q=75&w=1920",
    location:"https://goo.gl/maps/qNbgpRMCMFRGVeXN6",
    description:"São Miguel is the biggest island in the Portuguese Azores archipelago. It's known for its volcanic scenery, flora and rich marine life, including whales.",

 },
 {
    title:"For the thrill",
    name:"Mout Teide",
    country:"Spain",
    image:"https://www.barcelo.com/guia-turismo/wp-content/uploads/2019/08/parque-nacional-teide.jpg",
    location:"https://goo.gl/maps/C61dPxgNt9CXAcgV6",
    description:"Teide, or Mount Teide, is a volcano on Tenerife in the Canary Islands, Spain. Its summit is the highest point in Spain and the highest point above sea level in the islands of the Atlantic",

 },
];


function PageBody(): JSX.Element {
    return(
        <main>
            <BlogEntry entries={blogEntries}/>
        </main>
    )
}



export default PageBody;