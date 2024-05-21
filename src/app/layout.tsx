'use client';
import "../globals.css"
import TaskBar from "../components/TaskBar/TaskBar";
import Links from "../components/TaskBar/components/links";
import CodeTag from "../components/TaskBar/components/CodeTag";


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={"overflow-hidden"}>

        <body>

        <div>
            {children}
        </div>

    <div className={"w-full absolute bottom-0 right-0"} id="footer">
        <TaskBar/>
    </div>


        </body>
        </html>
    )
}