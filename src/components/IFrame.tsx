import Window from "./Windows/Window";

interface IFrameProps{
    source: string
}
export default function IFrame(props: IFrameProps){

    console.log(props.source)
    return (

            <iframe src={props.source} className={"w-full h-full"} ></iframe>

    )
}