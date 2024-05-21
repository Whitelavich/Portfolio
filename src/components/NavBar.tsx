import Link from "next/link";

export default function NavBar(){
    return (
        <div className={" grid grid-rows-1 lg:justify-end justify-center  underline text-white lg:pt-2"}>
            <div  >
                <Link className={"bg-cyan-800 p-1 rounded-lg drop-shadow-xl md:text-2xl  text-sm m-1"} href={"/"}>Home</Link>
                <Link className={"bg-cyan-800 p-1 rounded-lg drop-shadow-xl md:text-2xl text-sm m-1"} href={"/experience"}>Experience</Link>
                <Link className={"bg-cyan-800 p-1 rounded-lg drop-shadow-xl md:text-2xl text-sm m-1"} href={"/projects"}>Projects</Link>
                <Link className={"bg-cyan-800 p-1 rounded-lg drop-shadow-xl md:text-2xl text-sm m-1"} href={"/contact"}>Contact Me</Link>
            </div>

        </div>
    )
}