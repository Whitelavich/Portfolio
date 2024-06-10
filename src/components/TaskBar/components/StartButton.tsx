"use client";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Image from "next/image";
import { TfiPowerOff } from "react-icons/tfi";
import {useWindowStore} from "../../../utils/WindowStore";
 import me from "../../../../public/art/me.png"
import mw from "../../../../public/logos/mw.svg"
import {useState} from "react";
import Button from "../../inputs/Button";
export default function  StartButton() {
    const toggleResume = useWindowStore((state) => state.toggleResume)
    const toggleClickyGame = useWindowStore((state) => state.toggleClickyGame)
    const toggleMusicToy = useWindowStore((state) => state.toggleMusicToy)
    const [projectsExpanded,setProjectsExpanded] = useState(false)
    const triggerElement  = ()=>{
        return (
            <Image src={mw} alt={"mw"} width={140} className={"-m-3 -mb-12"}/>

        )
    }

    return (
        <div className={"pb-2 h-full w-fit"}>
            <Popup arrow={false} offsetY={-8}  offsetX={18}  trigger={triggerElement} position="top left" contentStyle={{height: '40%', width: '20%', backgroundColor: "transparent", border: '1px solid white',borderRadius: "0 20px 0 0 ", backdropFilter: "blur(5px)"}}>
                <div className={"text-white grid grid-cols-3 h-[100%]"}>
                    <div className={"col-span-2 grid grid-cols-1 pr-2  "}>
                        <Button> Home</Button>
                        <Button  onClick={()=>{toggleResume()}}> Resume</Button>
                        <Button  onClick={()=>{setProjectsExpanded(!projectsExpanded)}}> Projects</Button>

                        {projectsExpanded && (
                            <div>
                                <Button nested onClick={()=>{toggleClickyGame()}}>Clicky Game</Button>
                                <Button nested onClick={()=>{toggleMusicToy()}}>Music Toy</Button>
                            </div>

                        )}
                    </div>
                    <div className={"col-span-1 text-center"}>
                        <Image className={"border-2 "} style={{borderRadius: "0 20px 0 0 "}} src={me} alt={"An Image of me"}></Image>
                        <p>Megan Whitelavich</p>
                        <p>Full Stack Developer</p>
                </div>
                </div>
            </Popup>
        </div>

    )
}