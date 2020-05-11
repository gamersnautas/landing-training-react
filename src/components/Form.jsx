import React, { Fragment, useState, useEffect } from 'react'

const API = process.env.REACT_APP_LANDING


export const Form = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const submitForm = async (event) => {
        event.preventDefault();
        const data = await fetch(`${API}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email
            }),
        })

        const resp = await data.json(); // Caputaramos la respuesta del servidor de Flask
        console.log(resp)
    }

    return (
        <Fragment>

            <div className="arrow-shape">
                <div className="bg-contact">
                    <div className="dark">
                        <div className="container h-100">
                            <div className="row justify-content-center align-items-center h-100">
                                <div className="col-8">
                                    <form id="form1" className="text-white" onSubmit={submitForm}>
                                        <h2 className="display-4 text-center text-white">Join Now</h2>
                                        <div className="form-group">
                                            <label htmlFor="name">Name</label>
                                            <input type="text" name="name" id="name" className="form-control" onChange={event => setName(event.target.value)} value={name} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="name">Email</label>
                                            <input type="text" name="name" id="name" className="form-control" onChange={event => setEmail(event.target.value)} value={email} />
                                        </div>
                                        <div className="form-group btn-fix text-center">
                                            <button className="btn btn-primary text-uppercase button" id="btn-join" type="submit">Join Now</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}