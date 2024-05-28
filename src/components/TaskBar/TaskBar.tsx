import Image from "next/image";
import drips from "../../../public/art/drips.svg"
import Link from 'next/link'
import Links from "./components/links";
import NavBar from "../NavBar";
import CodeTag from "./components/CodeTag";
import StartButton from "./components/StartButton";
import Clock from "./components/Clock";


interface BannerProps {
    image?: string
}

export default function TaskBar(props: BannerProps) {
    return (
        <div >
            <div className="bg-gradient-to-r from-[#26333b] to-[#4d5351]  text-xl  py-0 mb-0 pt-1 grid grid-rows-1 ">
                    <StartButton/>
                    {/*<p className={"lg:text-5xl text-3xl text-white z-40"}>Megan Whitelavich</p>*/}
                <div className={" grid grid-rows-2 -mt-8  justify-end float-end pr-2 text-white"}>
                    <Links/>
                    <Clock/>
                </div>
            </div>
        </div>

   )

}