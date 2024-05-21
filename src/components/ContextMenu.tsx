interface ContextMenuProps {
    buttons:[{name:string ,click: ()=> void}]
    position: {x: number, y: number}
}

export default function ContextMenu(props: ContextMenuProps){
    //TODO: give this a frosted bg like startmenu when u have tailwind again m.w. 5.21.24
return (<div id={"context-menu"} className={"flex grid grid-cols-1 absolute "} style={{ top: props.position.y + "px", left: props.position.x + "px"}}>
    {props.buttons.map((btn) => {
        return(
            <button key={btn.name} onClick={btn.click}>{btn.name}</button>
        )
    })}

</div>)
}