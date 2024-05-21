'use client';
import Draggable from 'react-draggable';
import { TfiClose, TfiFullscreen } from "react-icons/tfi";

import Popup from "reactjs-popup";
import "./window.css"
import {useState} from "react";

interface windowProps {
children: React.ReactNode,
  isOpen:boolean,
    setIsOpen: ()=>void
}

export default function Window(props: windowProps,){


    const layout = [{ key: 'test', x: 0, y: 0, width: 200, height: 100, zIndex: 1 }]
    let defaultSize  = {height: '40vh', width: '50%'}
    let fullScreen  = {height: '80vh', width: '90%'}
    const [csize,setSize] = useState(defaultSize)

    const toggleFullScreen = ()=>{
        console.log(csize,defaultSize)

        if (csize.width === defaultSize.width){
            console.log({fullScreen})
            console.log("ye")
            setSize(fullScreen)

        }else{
            setSize(defaultSize)
        }
        console.log(csize)
    }
if (props.isOpen){
    return (

            <Draggable handle={"#handle"} bounds={"parent"}  >
                <div style={csize} >
                    <div id={"handle"} className={"bg-blue-300  h-[30px] min-w-10 flex justify-end gap-2 pr-2"}>
                        <button className={"text-blue-800 text-xl font-bold "} onClick={()=>{toggleFullScreen()}}><TfiFullscreen/></button>
                        <button className={"text-red-700 text-xl font-bold "} onClick={()=>{props.setIsOpen()}}><TfiClose/></button>
                    </div>
                    {props.children}
                </div>
            </Draggable>

    )
}else{
    return <div></div>
}

}