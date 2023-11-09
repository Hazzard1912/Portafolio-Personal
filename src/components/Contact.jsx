import React from "react";
import { Formik, Field, Form, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";

import Swal from "sweetalert2";

import emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("yP5PwuOMjGJSnus1S");

import Fade from "react-reveal/Fade";

import "../styles/Contact.css";

export const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  // Define validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required("Requerido").min(3, "Ingresa un nombre válido"),
    email: Yup.string()
      .matches(
        /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
        "Invalid email address"
      )
      .required("Ingresa un correo para poder contactarte"),
    phone: Yup.string().matches(/^(\d{10})$/, "Invalid phone number"),
    message: Yup.string().required("Envíame un mensaje, así sea un hola 👋"),
  });

  const enviarCorreo = (setSubmitting) => {
    emailjs
      .sendForm("service_wbkkx8w", "template_idh1qql", "#contact__form")
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          Swal.fire("Bien!", "Tu mensaje ha sido enviado!", "success");
          setSubmitting(false);

          
        },
        (err) => {
          console.log("FAILED...", err);
          Swal.fire("Oops...", "Algo salió mal!", "error");
          setSubmitting(false);
        }
      );
  };

  return (
    <section id="contact">
      <Fade bottom>
        <h2 className="contact__title">Contáctame</h2>.
        <Formik
          initialValues={formik.initialValues}
          validationSchema={validationSchema}
          onSubmit={({ setSubmitting }) => {
            enviarCorreo(setSubmitting);
          }}
        >
          <Form className="contact__form" id="contact__form">
            <label className="contact__label" htmlFor="name">
              Nombre
            </label>
            <Field className="contact__field" name="name" type="text" />
            <ErrorMessage
              className="contact__field-error"
              name="name"
              component="div"
            />

            <label className="contact__label" htmlFor="email">
              Email
            </label>
            <Field className="contact__field" name="email" type="email" />
            <ErrorMessage
              className="contact__field-error"
              name="email"
              component="div"
            />

            <label className="contact__label" htmlFor="phone">
              Teléfono
            </label>
            <Field className="contact__field" name="phone" type="tel" />
            <ErrorMessage
              className="contact__field-error"
              name="phone"
              component="div"
            />

            <label className="contact__label" htmlFor="message">
              Mensaje
            </label>
            <Field className="contact__field" name="message" as="textarea" />
            <ErrorMessage
              className="contact__field-error"
              name="message"
              component="div"
            />

            <button className="contact__submit" type="submit">
              Enviar
            </button>
          </Form>
        </Formik>
      </Fade>
    </section>
  );
};
