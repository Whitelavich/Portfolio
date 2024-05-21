'use client';
import Image from "next/image";
import me from "../../public/art/me.png"
import SkillHexagons from "../components/Hexagons/SkillHexagons";
import Window from "../components/Windows/Window";
import IFrame from "../components/IFrame";
import {useWindowStore} from "../utils/WindowStore";
import {useState} from "react";






export default function Page() {

    const handleContext = (event: any) => {
        event.preventDefault();
        console.log({event})
        setContextOpen(!contextOpen)
        setContextStyles({ top: event.pageY + "px", left: event.pageX + "px"})
    }

    const contextMenu = ()=>{
        return(
            //@ts-ignore
            <div id={"contextMenu"} className={"flex absolute bg-cyan-600 grid grid-cols-1"} style={contextStyles}>
                this will be a context menu
                <button onClick={()=>{bg === 'bg-beach-sunset' ? setBg('bg-river-valley') : setBg('bg-beach-sunset')}}>Change Background</button>
            </div>
        )}

    const resumeState = useWindowStore((state) => state.resume)
    const toggleResume = useWindowStore((state) => state.toggleResume)
    const clickyGameState = useWindowStore((state) => state.clickerGame)
    const toggleClickyGame = useWindowStore((state) => state.toggleClickyGame)
    const [bg,setBg] = useState('bg-beach-sunset')
    const [contextOpen,setContextOpen] = useState(false)
    const [contextStyles,setContextStyles] = useState({})
    return <div className={` pl-4 pt-4  w-full max-h-screen min-h-screen bg-cover bg-center bg-no-repeat ${bg} ` } onContextMenu={handleContext}>
        {/*<div className={" lg:flex lg:pl-4 "}>*/}
        {/*    <p className="lg:text-6xl text-2xl underline text-white lg:pl-40 pl-2 lg:pt-20 text-nowrap ">Hi, I'm Meg!</p>*/}
        {/*    <p className={"lg:text-6xl text-lg lg:pt-48 lg:-ml-10 pl-6 pt-2 text-nowrap "}> Full Stack Developer</p>*/}
        {/*</div>*/}

            <div className={"lg:w-[40%]"}>
                <SkillHexagons/>
            </div>

        {contextOpen && (
            contextMenu()
        )}

        <Window isOpen={resumeState} setIsOpen={toggleResume}><IFrame source={"/other/Whitelavich-Resume.pdf"}/></Window>
        <Window isOpen={clickyGameState} setIsOpen={toggleClickyGame}><IFrame source={"http://whitelavich.github.io/Clicky-Game/"}/> </Window>






    </div>
}