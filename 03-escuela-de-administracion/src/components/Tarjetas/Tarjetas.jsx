import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

const Tarjetas = ({
    filtroProfesor,
    profesores,
}) => {
    let { nombre, cargo } = filtroProfesor
    let dataProfesores = profesores.filter(dato => {
        return (
            dato.thumbnail.value.normalize("NFD").replace(/[\u0300-\u036f\u00E0-\u00FC]/g, '').toLowerCase() !== '/file/n4864/thumbnail_1014182068.jpg'
        )
    })
    let resultado
    if (!cargo && !nombre) {
        resultado = dataProfesores
    } else {
        resultado = dataProfesores.filter((dato) => {
            return (
                dato.personLabel.value.normalize("NFD").replace(/[\u0300-\u036f\u00E0-\u00FC]/g, '').toLowerCase().includes(nombre.replace(/[\u0300-\u036f\u00E0-\u00FC]/g, '').toLocaleLowerCase())
                &&
                // dato.PersonTitle.value.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase().includes(cargo.toLocaleLowerCase())
                // dato.PersonTitle.value.toLowerCase() === cargo.toLocaleLowerCase()
                dato.PersonTitle.value.replace(/Decana/g, 'Jefe').toLowerCase().includes(cargo.replace(/Decana/g, 'Jefe').toLocaleLowerCase())
            )
        })
    }
    let display = resultado.map((item, index) => {
        return (
            <div key={index} className="col-12 col-md-6 col-lg-6 mb-1">
                <div className="cardp">
                    <div className="row">
                        <div className="col-12 col-md-5 col-lg-5">
                            <picture>
                                {
                                    (() => {
                                        if (item.thumbnail) {
                                            return (
                                                <img className="image" src={`https://research-hub.urosario.edu.co${item.thumbnail.value}`} alt={`${item.personLabel.value}`} />
                                            )
                                        } else {
                                            return (
                                                <img className="image" src='https://urosario.edu.co/sites/default/files/2023-06/icono-user.jpg' alt={`${item.personLabel.value}`} />
                                            )
                                        }
                                    })()
                                }
                            </picture>
                        </div>
                        <div className="col-12 col-md-7 col-lg-7 card-equipo__body">
                            <h5>
                                <span>{item.personLabel.value}</span>
                                <br />
                                <small>{item.PersonTitle.value}</small>
                            </h5>
                            <p>
                                {
                                    (() => {
                                        if (item.lastGrade) {
                                            return (
                                                <>
                                                    {item.lastGrade.value}
                                                    <br />
                                                </>
                                            )
                                        } else {
                                            return
                                        }
                                    })()
                                }
                                {
                                    (() => {
                                        if (item.materias) {
                                            return (
                                                <small>
                                                    {item.materias.value}
                                                </small>
                                            )
                                        } else {
                                            return
                                        }
                                    })()
                                }
                            </p>
                            <p>
                                <i className="fas fa-envelope"></i> <a href={`mailto:${item.email.value}`}>{item.email.value}</a>
                                <br />
                                {
                                    (() => {
                                        if (item.telefono) {
                                            return (
                                                <>
                                                    <i className="fas fa-phone"></i> {item.telefono.value}
                                                </>
                                            )
                                        } else {
                                            return
                                        }
                                    })()
                                }
                            </p>
                            <br />
                            <a className="btn-pro" target="_blank" href={item.person.value} rel="noreferrer">
                                Ver más
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    function PaginatedItems({ itemsPerPage }) {
        const [itemOffset, setItemOffset] = useState(0);
        const endOffset = itemOffset + itemsPerPage;
        //console.log(`Carga de tarjetas por ${itemOffset} a ${endOffset}`);
        const currentItems = display.slice(itemOffset, endOffset);
        const pageCount = Math.ceil(display.length / itemsPerPage);
        const handlePageClick = (event) => {
            const newOffset = (event.selected * itemsPerPage) % display.length;
            console.log(
                `User requested page number ${event.selected}, which is offset ${newOffset}`
            );
            setItemOffset(newOffset);
        };
        return (
            <>
                {
                    (() => {
                        if (currentItems.length === 0) {
                            return (
                                <div className="container">
                                    <div className='row mt-5'>
                                        <div className="row d-flex justify-content-center errorBusqueda">
                                            <div className="col-sm-6 text-center">
                                                <img src="https://urosario.edu.co/sites/default/files/2023-05/icono-lupa.jpg" alt="No hay conincidencias en la busqueda del profesor" />
                                                <br />
                                                <h5>
                                                    <strong>
                                                        Lo sentimos, no pudimos encontrar coincidencias
                                                    </strong>
                                                    <br />
                                                    <small>
                                                        por favor intente nuevamente con otros términos
                                                    </small>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })()
                }
                <div className="container">
                    <div className='row my-5'>
                        {currentItems}
                    </div>
                </div>
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <ReactPaginate
                            breakLabel="..."
                            nextLabel=">"
                            onPageChange={handlePageClick}
                            marginPagesDisplayed={3}
                            pageRangeDisplayed={3}
                            pageCount={pageCount}
                            previousLabel="<"
                            renderOnZeroPageCount={null}
                            // estilos del paginador
                            containerClassName="pagination"
                            pageClassName="page-item"
                            pageLinkClassName="page-link"
                            previousClassName="page-item"
                            previousLinkClassName="page-link"
                            nextClassName="page-item"
                            nextLinkClassName="page-link"
                            breakClassName="page-item"
                            breakLinkClassName="page-link"
                            activeClassName="active"
                        />
                    </div>
                </div>
            </>
        );
    }
    return (
        <>
            <PaginatedItems itemsPerPage={8} />
        </>
    )
}
export default Tarjetas