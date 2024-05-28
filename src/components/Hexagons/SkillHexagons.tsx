"use client";
import Image from "next/image";
import "./hexagons.css"
import React from "react";
import {Tooltip} from 'react-tooltip'
import {getColorsFromSVG} from "../../utils/colors";
//@ts-ignore
import tinycolor from "tinycolor2";

import  awsLogo from "../../../public/logos/aws.svg"
import nodeLogo from "../../../public/logos/nodejs.svg"
import  reactLogo from "../../../public/logos/react.svg"
import  reactNativeLogo from "../../../public/logos/react-native.svg"
import  typescriptLogo from "../../../public/logos/typescript.svg"
import  pythonLogo from "../../../public/logos/python.svg"
import  postgresLogo from "../../../public/logos/postgresql.svg"
import  dynamoDBLogo from "../../../public/logos/dynamodb.svg"
import  vueLogo from "../../../public/logos/vuejs.svg"
import  cdkLogo from "../../../public/logos/cdk.svg"
import  lambdaLogo from "../../../public/logos/lambda.svg"
import svelteLogo from "../../../public/logos/svelte.svg"


import  rawAwsLogo from "../../../public/logos/aws.txt"
import  rawNodeLogo from "../../../public/logos/nodejs.txt"
import  rawReactLogo from "../../../public/logos/react.txt"
import  rawReactNativeLogo from "../../../public/logos/react-native.txt"
import  rawTypescriptLogo from "../../../public/logos/typescript.txt"
import  rawPythonLogo from "../../../public/logos/python.txt"
import  rawPostgresLogo from "../../../public/logos/postgresql.txt"
import  rawDynamoDBLogo from "../../../public/logos/dynamodb.txt"
import  rawVueLogo from "../../../public/logos/vuejs.txt"
import  rawCdkLogo from "../../../public/logos/cdk.txt"
import  rawLambdaLogo from "../../../public/logos/lambda.txt"
import rawSvelteLogo from "../../../public/logos/svelte.txt"





const skills = [
    {image: nodeLogo, name: "Node.js", bg: "#155e75", raw: rawNodeLogo},
    {image: typescriptLogo, name: "TypeScript", classes: " p-6", bg: "#155e75", raw: rawTypescriptLogo},
    {image: reactLogo, name: "React", classes: " lg:ml-3 p-3", bg: "#155e75",raw: rawReactLogo},
    {image: reactNativeLogo, name: "React Native", classes: "lg:mb-4 pb-2", bg: "#155e75",raw: rawReactNativeLogo},
    {image: vueLogo, name: "Vue.js", classes: "lg:ml-3 lg:mt-2 p-3", bg: "#155e75",raw: rawVueLogo},
    {image: svelteLogo, name: "Svelte", classes: "lg:ml-5 p-3 ", bg: "#155e75",raw: rawSvelteLogo},
    {image: pythonLogo, name: "Python", classes: "lg:ml-4 lg:mt-2 pl-3", bg: "#155e75", raw: rawPythonLogo},
    {image: awsLogo, name: "Amazon Web Services", raw: rawAwsLogo, bg: "#155e75"},
    {image: cdkLogo, name: "AWS Cloud Development Kit", classes: "lg:ml-8 lg:p-0 md:ml-4 md:p-1 p-3  ", bg: "#155e75",raw:rawCdkLogo},
    {image: lambdaLogo, name: "AWS Lambda", classes: "lg:p-8 p-3 md:p-5", bg: "#155e75", raw: rawLambdaLogo},
    {image: dynamoDBLogo, name: "Dynamo DB", classes: "px-3", bg: "#155e75", raw: rawDynamoDBLogo},
    {image: postgresLogo, name: "Postgre-SQL", classes: "lg:ml-3 p-2", bg: "#155e75", raw: rawPostgresLogo},
]



skills.map((skill)=>{
    // console.log(skill.image)
    const imgComponent = ( <Image id={skill.name} className={`p-1 ${skill.classes}`} src={skill.image} alt={skill.name}/>)
    // console.log(skill.raw)
    let color = getColorsFromSVG(skill.raw ?? "")
    // console.log({colors})
    console.log(skill.name)
    if(color){
        let originalColor = tinycolor(color)
        skill.bg = originalColor.lighten(20).toString()
        console.log(skill.bg )
    }

})
export default function SkillHexagons() {


    const Hexagons = [0, 1, 2, 3, 4, 5,]
    return (
        <div className={"main flex w-full"}  >
            <div className={"container text-[0]"}>
                {skills.map(({image, name, classes,bg}) => {
                    return (
                        <div key={name} className={"inline-block w-16 md:w-28 lg:w-40 m-1 lg:m-2 "} data-tooltip-id={"tooltip"} data-tooltip-content={name} data-tooltip-place={"top"} style={{backgroundColor: bg,}}>
                            <Image id={name} className={`p-1 ${classes}`} src={image} alt={name}/>
                        </div>)
                })}
            </div>
            <Tooltip id={"tooltip"} />
        </div>

    )
}