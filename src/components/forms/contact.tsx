import {Field, Form, Formik} from "formik";
import TextField from "../inputs/TextField";

export default function ContactForm() {
   return ( <Formik initialValues={{email: "", subject: "", message: ""}} onSubmit={(values, actions) => {
        console.log({values, actions});
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
    }}>
        {({isSubmitting}) => (
            <Form>
                <div className={"grid-rows-3 gap-4 "}>
                    <div className={"flex flex-row gap-4 justify-center"}>
                        <Field component={TextField} name={"email"} type="email" placeholder="Email" size={24}></Field>
                        <Field component={TextField} name={"subject"} type="text" placeholder="Subject"
                               size={24}></Field>
                    </div>
                    <div className={"pt-2 flex justify-center"}>
                        <Field component={TextField} type="textarea" name={"message"} placeholder="Message..."
                               size={48}></Field>
                    </div>
                    <div className={" p-2 justify-center flex"}>
                        <button className={"border-blue-400 border-2 border-solid"} type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </div>
                </div>


            </Form>
        )}
    </Formik>)
}