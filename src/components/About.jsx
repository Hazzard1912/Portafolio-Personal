import Fade from "react-reveal/Fade";

import "../styles/About.css";
import { AboutText } from "./AboutText";

export const About = () => {
  // objeto de javascript con los textos:
  const texts = {
    angular:
      "Angular es el primer framework de desarrollo frontend que aprendí a usar. Me ha impresionado su enfoque en la creación de aplicaciones web escalables y su potente sistema de inyección de dependencias. He trabajado con componentes, servicios, directivas, pipes, y módulos para crear aplicaciones web completas. También he utilizado RxJS para manejar la asincronía y el estado de la aplicación. Además, he trabajado con Angular Material para crear interfaces de usuario atractivas y amigables. Aunque no he trabajado con Angular en un tiempo, estoy comprometido a practicar y aprender más para poder utilizarlo para crear aplicaciones web verdaderamente asombrosas.",
    react:
      "React es la segunda biblioteca de desarrollo frontend que aprendí a usar. Me ha impresionado su enfoque en la construcción de interfaces de usuario a través de componentes y su eficiente manejo del estado y del ciclo de vida de los componentes. He utilizado varios hooks, como useState, useEffect, useContext y custom hooks, para manejar el estado y los efectos secundarios en los componentes funcionales. También he trabajado con Redux para manejar el estado global de la aplicación. Además, he aplicado patrones de desarrollo de componentes como Higher Order Components (HOCs) y Render Props. Otras características que he utilizado incluyen React Router para el enrutamiento, React Context para el manejo del estado a nivel de aplicación, y React Suspense y React Lazy para la carga diferida de componentes.",
    css: "CSS ha sido un desafío interesante. Aunque el diseño no es mi principal fortaleza, he adquirido una comprensión sólida de varios conceptos clave para crear interfaces de usuario atractivas y amigables. He trabajado con flexbox y grid para el diseño de la página, animaciones y transiciones para mejorar la interactividad, y media queries para hacer que las páginas sean responsivas. Aunque todavía estoy en el camino de dominar CSS, estoy comprometido a practicar y aprender más para poder utilizar CSS para crear experiencias web verdaderamente asombrosas.",
    node: "Node.js fue mi primera incursión en la tecnología de backend. El desarrollo de APIs RESTful y servidores que conectan el frontend con la lógica de la aplicación ha sido una experiencia fascinante. A través de esto, he aprendido a manejar correctamente la información en el desarrollo web, utilizando middlewares para validar la información entrante, bcrypt para la seguridad de las contraseñas, y ORMs para interactuar con bases de datos. También he trabajado con controladores para manejar las respuestas a las solicitudes. Mi experiencia con Node.js ha sido fundamental para entender el flujo completo de la información en una aplicación web desde el frontend hasta el backend.",
    python:
      "Mi experiencia con Python ha sido en gran parte a través de Django y FastAPI. Con Django, he trabajado en aplicaciones web, aprovechando su potente marco de trabajo, aunque principalmente he prescindido de su enfoque SSR. FastAPI, por otro lado, me ha permitido crear rápidamente APIs RESTful de alto rendimiento. Ambos marcos de trabajo me han proporcionado una comprensión sólida de cómo Python puede ser utilizado para el desarrollo web backend.",
    databases:
      "Las bases de datos son un componente esencial en cualquier aplicación web. Dado que el modelo relacional sigue siendo dominante, he optado por aprender MySQL y PostgreSQL. Aunque mi conocimiento no es extremadamente profundo, tengo una sólida base en el diseño eficiente de bases de datos, normalización y consultas comunes. Continúo aprendiendo y mejorando mis habilidades en este área para poder diseñar y administrar bases de datos de manera efectiva.",
    git: "El trabajo colaborativo es esencial en el desarrollo de software y Git es una herramienta indispensable para ello. Aunque las circunstancias no me han obligado a aprender Git a fondo, tengo buenos conocimientos y no es una tecnología que me tome por sorpresa. He logrado llevar a cabo proyectos colaborativos utilizando Git y, como todos, he enfrentado las dificultades de resolver un conflicto de fusión. Espero seguir aprendiendo y aprovechando esta tecnología, ya que el control de versiones es un aspecto crucial en el desarrollo de software.",
  };

  return (
    <section id="about">
      <Fade bottom>
        <div className="about__heading">
          <h2 className="about__title">acerca de mí</h2>
        </div>
      </Fade>

      <div className="about__container">
        <div className="about__content">
          <Fade bottom>
            {Object.entries(texts).map(([key, text]) => (
              <div className="about__text" key={key}>
                <h3 className="about__subtitle">{key}</h3>
                <img src={`../../public/icons8-${key}-48.png`} />
                <AboutText text={text} id={key} />
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </section>
  );
};
