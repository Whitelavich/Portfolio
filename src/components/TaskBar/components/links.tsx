import github from "../../../../public/logos/github-mark.svg";
import linkedin from "../../../../public/logos/linkedin.svg";
import Image from 'next/image';
import CodeTag from "./CodeTag";

type size = "sm" | "lg"

interface linksProps {
    size?: size
}

export default function Links(props: linksProps) {
    const iconSize = props.size && props.size === "lg" ? "64" : "32"
    return <div className={"flex flex-row gap-4 float-end justify-end"}>
        <a href={"https://github.com/Whitelavich"} target={"_blank"}>
            <Image src={github} height={iconSize} width={iconSize} alt={"Check out my Github"}></Image>
        </a>
       <a href={"https://www.linkedin.com/in/megan-whitelavich/"} target={"_blank"}>
           <Image src={linkedin} height={iconSize} width={iconSize} alt={"Check out my Linkedin"}></Image>
       </a>



    </div>
}