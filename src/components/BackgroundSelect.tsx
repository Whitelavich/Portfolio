import Button from "./inputs/Button";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import {useWindowStore} from "../utils/WindowStore";
import {useState} from "react";



export default function BackgroundSelect(){
    const images = [
        {src:'/art/beach-sunset.JPG', title: 'Beach Sunset', class: 'bg-beach-sunset'},
        {src:'/art/riverValley.JPG', title: 'River Valley', class: 'bg-river-valley'},
        {src:'/art/tranquil-stream.JPG', title: 'Tranquil Stream', class: 'bg-tranquil-stream'}];
    const setBackground = useWindowStore((state) => state.setBackground)
    return (
        <div className={"bg-white w-full h-full  flex justify-center overflow-scroll"} >
            <Carousel className={'w-full h-[60%]'}  >
                {images.map((image)=>{
                    return (
                        <div >
                            <img src={image.src} alt={image.title} style={{ width: '100%'}} ></img>
                            <Button onClick={()=>setBackground(image.class)} className={"legend"}>Set Background to: {image.title}</Button>

                        </div>
                    )
                    })}




            </Carousel>

        </div>
    )
}