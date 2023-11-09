import "../styles/Projects.css";

export const Projects = () => {
  const texts = {
    text_proyecto1:
      "Desarrollé una aplicación web para una startup que muestra información relevante sobre el comportamiento de criptomonedas en tablas rankeadas según criterios específicos. Utilicé React para el front-end y FastAPI para el back-end.",
    text_proyecto2:
      "Desarrollé una aplicación de escritorio con Python que permite a los usuarios cargar audios, que son manipulados internamente por la app, transcritos a texto y devuelven archivos de texto con correcciones de redacción. Utilicé Python para la lógica de negocio y la interfaz gráfica de usuario (GUI) con Tkinter y APIs de terceros",
    text_proyecto3:
      "Desarrollé un aplicativo web para una empresa de control de plagas que permite a los usuarios visualizar el estado de las trampas y recibir notificaciones. Utilicé PHP para el desarrollo.",
    text_proyecto4:
      "La aplicación es esencialmente un buscador que utiliza la API de Giphy. Es una aplicación sencilla diseñada para practicar el consumo de APIs de terceros y también hace uso de localStorage para almacenar información, en este caso, el historial de búsqueda, para que persista cuando se recarga la página. La aplicación se ha construido usando Angular versión 15, lo que implica implementar una arquitectura basada en módulos.",
    text_proyecto5:
      "El desarrollo de esta aplicación ha sido posible gracias a la API de Restcountries. Esta aplicación te permite buscar países utilizando diferentes criterios, como el nombre o la capital, e incluso puedes encontrarlos en una lista basada en la región o el continente seleccionado. Además, la aplicación cuenta con una caja de búsqueda que utiliza un debouncer para consultar la API en ciertos intervalos y proporciona al usuario una lista funcional de países sugeridos en función de lo que están escribiendo. La aplicación utiliza varios componentes, incluyendo páginas, lo que permite practicar la comunicación entre ellos. Por ejemplo, tanto el componente de búsqueda de países como el componente de búsqueda de capitales incluyen la caja de búsqueda, y cada uno utiliza la información de una manera específica para su funcionalidad.",
  };

  return (
    <section id="projects">
      <div className="projects__background"></div>
      <div className="projects__container">
        <h2 className="projects__title">Proyectos realizados</h2>

        <div className="projects__box">
          <div className="project__card">
            {/* <div className="project__img"></div> */}
            <div className="project__heading">
              <h3 className="project__title">Proyecto 1</h3>
              <p className="project__subtitle">
                Aplicación web de ranking de cryptomonedas
              </p>
            </div>
            <div className="project__description">{texts.text_proyecto1}</div>
          </div>
          <div className="project__card">
            {/* <div className="project__img"></div> */}
            <div className="project__heading">
              <h3 className="project__title">Proyecto 2</h3>
              <p className="project__subtitle">
                Aplicación de escritorio con Python
              </p>
            </div>
            <div className="project__description">{texts.text_proyecto2}</div>
          </div>
          <div className="project__card">
            {/* <div className="project__img"></div> */}
            <div className="project__heading">
              <h3 className="project__title">Proyecto 3</h3>
              <p className="project__subtitle">
                Aplicación web de control de pestes
              </p>
            </div>
            <div className="project__description">{texts.text_proyecto3}</div>
          </div>
          <div className="project__card">
            {/* <div className="project__img"></div> */}
            <div className="project__heading">
              <h3 className="project__title">Proyecto 4</h3>
              <p className="project__subtitle">
                Aplicación de búsqueda de gifs
              </p>
            </div>
            <div className="project__description">{texts.text_proyecto4}</div>
          </div>
          <div className="project__card">
            {/* <div className="project__img"></div> */}
            <div className="project__heading">
              <h3 className="project__title">Proyecto 5</h3>
              <p className="project__subtitle">
                Aplicación de búsqueda de países e información
              </p>
            </div>
            <div className="project__description">{texts.text_proyecto5}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
