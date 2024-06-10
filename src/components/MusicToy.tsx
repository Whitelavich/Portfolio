import Button from "./inputs/Button";
import * as Tone from "tone";
import * as Matter from 'matter-js'
import {useEffect, useRef} from "react";
import {Bodies} from "matter-js";




export default function MusicToy(){
    const boxRef = useRef(null);
    const canvasRef = useRef(null);
    const synth = new Tone.FMSynth().toDestination();
    let Engine = Matter.Engine;
    let Render = Matter.Render;
    let World = Matter.World;
    let Bodies = Matter.Bodies;
    let Events = Matter.Events

    const floor = Bodies.rectangle(150, 300, 300, 20, {
        label: "floor",
        restitution: 1,
        isStatic: true,
        render: {
            fillStyle: 'blue',
        },
    });
    const leftWall = Bodies.rectangle(0, 150, 20, 300, {
        label: "leftWall",
        restitution: 1,
        isStatic: true,
        render: {
            fillStyle: 'blue',
        },
    });
    const rightWall = Bodies.rectangle(300, 150, 20, 300, {
        label: "rightWall",
        restitution: 1,
        isStatic: true,
        render: {
            fillStyle: 'blue',
        },
    });

    const ceiling = Bodies.rectangle(150, 0, 300, 20, {
        label: "ceiling",
        restitution: 1,
        isStatic: true,
        render: {
            fillStyle: 'blue',
        },
    });

    let ball = (note:string)=> Bodies.circle(150, 0, 10, {
        label: 'ball',
        id: note,
        restitution: 1,
        render: {
            fillStyle: 'yellow',
        },


    });

    let engine = Engine.create({});


    useEffect(() => {
        let render = Render.create({
            // @ts-ignore
            element: boxRef.current,
            engine: engine,
            // @ts-ignore
            canvas: canvasRef.current,

            options: {
                width: 300,
                height: 300,
                background: 'rgba(255, 0, 0, 0.5)',
                wireframes: false,

            },
        });



        Matter.Runner.run(engine);
        Render.run(render);
        Events.on(engine, "afterUpdate", (e)=>{ handleTick()})

        Events.on(engine, "collisionStart", (e)=>{handleCollsion(e)})
        World.add(engine.world, [floor,leftWall,rightWall,ceiling]);


    }, [engine]);

    const handleTick = ()=>{
        // console.log(engine.world.bodies.length)

        if(engine.world.bodies.length > 8){
            // console.log(ball.position.y)
            // synth.triggerAttackRelease("c4","8n")
            const yValues: Tone.Unit.Frequency | Tone.Unit.Frequency[] = []
            engine.world.bodies.forEach((body)=>{
                if(body.label === 'ball'){
                    // synth.triggerAttackRelease(body.position.y,"64n", Tone.now())
                    const xForce = Math.random()
                    const isNeg = Math.ceil(xForce * 10) % 2 === 0
                    if(body.position.y > 280){
                        Matter.Body.applyForce(body,{x:body.position.x, y: 280.6}, {x: isNeg ? -.005 * xForce : .005 * xForce , y: -.005 * Math.random()})
                    }
                }


            })
            // console.log(yValues)

            // Matter.Body.setVelocity(ball,{x: 0, y: -1})

            // if(ball.position.y)
            // synth.triggerAttackRelease(300 - ball.position.y,"64n")

        }

    }

    const handleCollsion = (event: any) => {

        event.pairs.forEach((pair: any)=>{
            console.log('A',pair.bodyA.label,pair.bodyA.id)
            console.log('B',pair.bodyB.label,pair.bodyB.id)

            let note = ''
            if(pair.bodyB.label === 'ball'){

                        note = `${pair.bodyB.id}`

            }else{


                        note = `${pair.bodyA.id}`

            }

            synth.triggerAttackRelease(note,"32n", Tone.now())


        })
    }

    let octave = 0
    const cMajor  = ['C4','D4','E4','F4','G4','A4','B4','C5'];
    const Ebmajor = ['Eb4','F4','G4','Ab4','Bb4','C5','D5','Eb5'];
    const bFlat = ['Bb','C','D','Eb','F','G','A']


    const notes = Ebmajor
    const handleClick = async ()=> {
        // World.remove(engine.world,[ball])
        // ball = Bodies.circle(150, 0, 10, {
        //     restitution: 1,
        //     render: {
        //         fillStyle: 'yellow',
        //     },
        //
        // });

        // synth.triggerAttackRelease("c4","8n")
        World.add(engine.world, ball(notes[octave]));
        octave ++
        if(octave === notes.length ) {
            octave = 0
        }

    }


return ( <div>
    <div
        ref={boxRef}
        className={"w-full h-full bg-white grid grid-cols-1 justify-content-center "}
    >
        <canvas ref={canvasRef}   style={{

        }} />
        <Button onClick={handleClick}> Click Me!</Button>
    </div>

</div>)
}