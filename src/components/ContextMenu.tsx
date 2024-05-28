import Button from "./inputs/Button";

interface ContextMenuProps {
    buttons:[{name:string ,click: ()=> void}]
    position: {x: number, y: number}
}

export default function ContextMenu(props: ContextMenuProps){


    return (<div id={"context-menu"} className={"flex grid grid-cols-1 absolute bg-transparent border-white border-2 backdrop-blur-lg"} style={{ top: props.position.y + "px", left: props.position.x + "px"}}>
    {props.buttons.map((btn) => {
        return(
            <Button key={btn.name} onClick={btn.click}>{btn.name}</Button>
        )
    })}

</div>)
}