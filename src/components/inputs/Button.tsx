import {ReactNode} from "react";

interface ButtonProps{
    onClick?: ()=>void
    children: ReactNode
    nested?: boolean
    className?: string
}

const buttonClasses = ''
export default function Button(props: ButtonProps){
    return <button className={`shrink ${props.nested ? 'bg-cyan-900 ml-4' :'bg-cyan-800' } p-1 rounded-lg drop-shadow-xl md:text-2xl text-sm m-1 text-start text-white ${props.className}`} onClick={props.onClick}>{props.children}</button>
}