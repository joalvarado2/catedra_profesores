import React, { useState } from 'react'

const Formulario = ({
    setFiltroProfesor,
    profesores
}) => {
    let initialState = { nombre: '', cargo: '' }
    const [datosCampos, setDatosCampos] = useState(initialState)
    let { nombre, cargo } = datosCampos
    const handleChange = (e) => {
        const { name, type, value, checked } = e.target
        setDatosCampos((old) => ({
            ...old,
            [name]: type === 'checkbox' ? checked : value
        }))
    }
    const limpiarFiltro = () => {
        setDatosCampos(initialState)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setFiltroProfesor(datosCampos)
    }
    const dataCargo = profesores.map((cargo) => {
        return cargo.PersonTitle.value
    })
    const dataArr = new Set(dataCargo);
    let resultadoCargos = [...dataArr].sort();
    return (
        <form onSubmit={handleSubmit} className='mb-1 container'>
            <div className="row d-flex justify-content-center">
                <div className='col-sm-3'>
                    <input
                        placeholder='Busqueda por nombre'
                        className='form-control w-100'
                        type="text"
                        autoComplete='off'
                        onChange={handleChange}
                        name='nombre'
                        value={nombre}
                    />
                </div>
                <div className='col-sm-3'>
                    <select
                        className='form-select'
                        name='cargo'
                        value={cargo}
                        onChange={handleChange}
                    >
                        <option
                            value="">Seleccione el cargo</option>
                        {
                            resultadoCargos.map((cargo, index) => {
                                return (
                                    <option key={index} value={cargo}>{cargo}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="col-sm-3">
                    <button className='btn btn-outline-primary me-2'>
                        Buscar
                    </button>
                    <button
                        onClick={limpiarFiltro}
                        className='btn btn-outline-danger'
                    >
                        Limpiar filtro
                    </button>
                </div>
            </div>
        </form>
    )
}
export default Formulario