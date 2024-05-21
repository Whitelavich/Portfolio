import {FieldProps} from "formik";

interface TextFieldProps extends FieldProps{
    type:  "email" |"number" |"password" |"search"  |"tel" |"text" |"url" | "textarea"
    placeholder: string
    size: number
}
export default function TextField(props: TextFieldProps){
    switch (props.type){
        case "textarea":
            return (
                <div  >
                    <textarea className={"border-blue-400 border-2 border-solid flex border-l-8"} {...props.field} placeholder={props.placeholder} cols={props.size} ></textarea>
                </div>
            )
        break
        default:
            return (
                <div className={"border-blue-400 border-2 border-solid flex border-l-8"}>
            <input type={props.type} {...props.field} placeholder={props.placeholder} size={props.size}></input>
        </div>
        )
        break

    }

}