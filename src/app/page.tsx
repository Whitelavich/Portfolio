'use client';
import Image from "next/image";
import me from "../../public/art/me.png"
import SkillHexagons from "../components/Hexagons/SkillHexagons";
import Window from "../components/Windows/Window";
import IFrame from "../components/IFrame";
import {useWindowStore} from "../utils/WindowStore";
import {useState} from "react";
import ContextMenu from "../components/ContextMenu";
import CursorSelect from "../components/CursorSelect";






export default function Page() {

    const handleContext = (event: any) => {
        event.preventDefault();
        console.log({event})
        setContextOpen(!contextOpen)
        // setContextStyles({ top: event.pageY + "px", left: event.pageX + "px"})
        setContextPosition({x:event.pageX,y: event.pageY})
    }

    const [contextPosition, setContextPosition] = useState({x: 0,y: 0})

    const currCursor = useWindowStore((state) => state.cursor)


    const resumeState = useWindowStore((state) => state.resume)
    const toggleResume = useWindowStore((state) => state.toggleResume)

    const clickyGameState = useWindowStore((state) => state.clickerGame)
    const toggleClickyGame = useWindowStore((state) => state.toggleClickyGame)

    const cursorSelectState = useWindowStore((state) => state.cursorSelect)
    const toggleCursorSelect = useWindowStore((state) => state.toggleCursorSelect)

    const [bg,setBg] = useState('bg-beach-sunset')
    const [contextOpen,setContextOpen] = useState(false)
    const [contextStyles,setContextStyles] = useState({})

    const contextButtons  = [{name: "Set Background", click: ()=>{bg === 'bg-beach-sunset' ? setBg('bg-river-valley') : setBg('bg-beach-sunset')}},
        {name: "Change Cursor",click: toggleCursorSelect}]

    const contextMenu = ()=>{
        return(
            //@ts-ignore
            <ContextMenu buttons={contextButtons} position={contextPosition}/>
        )}

    return <div className={` pl-4 pt-4  w-full max-h-screen min-h-screen bg-cover bg-center bg-no-repeat ${bg} ${currCursor}` } onContextMenu={handleContext}>
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
        <Window isOpen={cursorSelectState} setIsOpen={toggleCursorSelect}><CursorSelect/></Window>






    </div>
}