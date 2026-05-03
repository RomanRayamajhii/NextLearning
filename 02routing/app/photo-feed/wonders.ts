


import { StaticImageData } from "next/image";
import photo1 from "./photos/photo1.png";
import photo2 from "./photos/photo2.png";
import photo3 from "./photos/photo3.png";
import photo4 from "./photos/photo4.png";
import photo5 from "./photos/photo5.png";
import photo6 from "./photos/photo6.png";
import photo7 from "./photos/photo7.png";


export interface WonderImage {
  id: number;
  name: string;
  src: StaticImageData;
  photographer: string;
  location: string;
}

const wondersImage: WonderImage[] = [
    {
        id:1,
        name:"Great Wall of China",
        src:photo1,
        photographer:"Roman Rayamajhi",
        location:"China"
    },{
        id:2,
        name:"Taj Mahal",
        src:photo2,
        photographer:"Tara",
        location:"India"
    },{
        id:3,
        name:"Machu Picchu",
        src:photo3,
        photographer:"Roman",
        location:"Peru"
    },{
        id:4,
        name:"Colosseum",
        src:photo4,
        photographer:"Ram",
        location:"Italy"
    },{
        id:5,
        name:"Chichen Itza",
        src:photo5,
        photographer:"Roman Rayamajhi",
        location:"Mexico"
    },{ 
        id:6,
        name:"Petra",
        src:photo6,
        photographer:"Roman Rayamajhi",
        location:"Jordan"
    },{
        id:7,
        name:"Lumbini",
        src:photo7,
        photographer:"Roman Rayamajhi",
        location:"Nepal"
    }
];

export default wondersImage;
