interface ContextMenuProps {
    buttons:[{name:string ,click: ()=> void}]
    position: {x: number, y: number}
}

export default function ContextMenu(props: ContextMenuProps){
    const buttonClasses = 'shrink bg-cyan-800 p-1 rounded-lg drop-shadow-xl md:text-2xl text-sm m-1 text-start text-white  '

    return (<div id={"context-menu"} className={"flex grid grid-cols-1 absolute bg-transparent border-white border-2 backdrop-blur-lg"} style={{ top: props.position.y + "px", left: props.position.x + "px"}}>
    {props.buttons.map((btn) => {
        return(
            <button className={buttonClasses} key={btn.name} onClick={btn.click}>{btn.name}</button>
        )
    })}

</div>)
}