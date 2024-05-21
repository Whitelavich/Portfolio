"use client";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Image from "next/image";
import { TfiPowerOff } from "react-icons/tfi";
import {useWindowStore} from "../../../utils/WindowStore";
 import me from "../../../../public/art/me.png"
import mw from "../../../../public/logos/mw.svg"
import {useState} from "react";
export default function StartButton() {
    const toggleResume = useWindowStore((state) => state.toggleResume)
    const toggleClickyGame = useWindowStore((state) => state.toggleClickyGame)
    const [projectsExpanded,setProjectsExpanded] = useState(false)
    const triggerElement  = ()=>{
        return (
            <Image src={mw} alt={"mw"} width={120} className={"-m-4"}/>

        )
    }
    const buttonClasses = 'shrink bg-cyan-800 p-1 rounded-lg drop-shadow-xl md:text-2xl text-sm m-1 text-start  '
    const subButtonClasses = buttonClasses + 'ml-4 bg-cyan-900'
    return (
        <div className={"pb-2"}>
            <Popup arrow={false} offsetY={-8}  offsetX={18}  trigger={triggerElement} position="top left" contentStyle={{height: '40%', width: '20%', backgroundColor: "transparent", border: '1px solid white',borderRadius: "0 20px 0 0 ", backdropFilter: "blur(5px)"}}>
                <div className={"text-white grid grid-cols-3 h-[100%]"}>
                    <div className={"col-span-2 grid grid-cols-1 pr-2  "}>
                        <button className={buttonClasses} > Home</button>
                        <button className={buttonClasses} onClick={()=>{toggleResume()}}> Resume</button>
                        <button className={buttonClasses} onClick={()=>{setProjectsExpanded(!projectsExpanded)}}> Projects</button>

                        {projectsExpanded && (
                            <button className={subButtonClasses} onClick={()=>{toggleClickyGame()}}>Clicky Game</button>

                            )}

                    </div>
                    <div className={"col-span-1 text-center"}>
                        <Image className={"border-2 "} style={{borderRadius: "0 20px 0 0 "}} src={me} alt={"An Image of me"}></Image>
                        <p>Megan Whitelavich</p>
                        <p>Full Stack Developer</p>
                </div>
              {/*<div className={"col-span-3"} >*/}
              {/*    <TfiPowerOff className={"flex float-end"} color={"red"} size={24} />*/}
              {/*</div>*/}
                </div>
            </Popup>
        </div>

    )
}