"use client";
import {Field, Form, Formik} from "formik";
import TextField from "../../components/inputs/TextField";
import ContactForm from "../../components/forms/contact";

export default function Page() {

    return (
        <div className={"w-full h-full"}>
            <ContactForm/>
        </div>
    )
}