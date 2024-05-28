
import Image from "next/image";

import threeDCursor from '../../public/art/cursors/3d.png'
import laptopCursor from '../../public/art/cursors/laptop.png'
import skullCursor from '../../public/art/cursors/skull.png'
import monstercatCursor from '../../public/art/cursors/monstercat.png'
import {useWindowStore} from "../utils/WindowStore";

import * as FAicons from 'react-icons/fa'
import Button from "./inputs/Button";
export default function CursorSelect(){
    const setCursor = useWindowStore((state) => state.setCursor)
    const buttonClasses = 'shrink bg-cyan-800 p-1 rounded-lg drop-shadow-xl md:text-2xl text-sm m-1 text-start  text-white '
    const cursors = [
        { name: "3d" , image: threeDCursor, class: 'cursor-3d'},
        { name: "Laptop" , image: laptopCursor, class: 'cursor-laptop'},
        { name: "Skull" , image: skullCursor, class: 'cursor-skull'},
        { name: "Monster Cat" , image: monstercatCursor, class: 'cursor-monstercat'}
    ]
    const icons : {} = FAicons as unknown as {}
    console.log({icons})
    return(
        <div className={"w-full h-full bg-white grid grid-rows-4"}>
            <div className={"row-span-3"}>
                {cursors.map((cursor) => {



                    return ( <div className={"w-[75px] text-center justify-center"}>
                            <Image className={"ml-3"} width={50} height={50} src={cursor.image} alt={cursor.name} onClick={()=>setCursor(cursor.class)}></Image>
                            <p>{cursor.name}</p>
                        </div>
                    )


                })}
             
            </div>

            <Button  onClick={()=>setCursor('')}> Reset </Button>

        </div>
    )
}