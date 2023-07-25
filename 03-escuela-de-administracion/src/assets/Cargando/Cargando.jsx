import './Cargando.scss'
const Cargando = () => {
    return (
        <div className="loading">
            <div className="d-flex align-items-center vh-100 w-100">
                <div className="row d-flex justify-content-center w-100">
                    <div className="col-sm-6 text-left p-1">
                        <div className="seccion-titulo">
                            <h3 className="Titulo">
                                <i className="fas fa-school"></i> Profesores
                            </h3>
                            <h4 className="Facultad text-center text-white">
                                Facultad de Ciencias Naturales
                            </h4>
                            <div className="LogoUR text-center">
                                <img className="mx-auto" alt="Logo Universidad del Rosario" src="https://urosario.edu.co/sites/default/files/2023-04/logo.svg" />
                            </div>
                            <p className="text-white text-center">Cargando información</p>
                            <div className="d-flex justify-content-center">
                                <div className="loader">
                                    <span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cargando