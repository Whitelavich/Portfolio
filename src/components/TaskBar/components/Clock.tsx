'use client';
import {useState} from "react";


export default function Clock(){
    let time  = new Date().toLocaleTimeString()

    const [ctime,setTime] = useState(time)
    const UpdateTime=()=>{
        time =  new Date().toLocaleTimeString()
        setTime(time)
    }
    setInterval(UpdateTime)
    return(
        <p suppressHydrationWarning >{ctime}</p>
    )
}