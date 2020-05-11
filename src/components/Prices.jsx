import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'

export const Prices = () => (

    <Fragment>

        <section id="prices">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4 mb-5">
                        <div className="card">
                            <div className="card-body justify-content-center text-center">
                                <h1 className="card-title mt-4 mb-5">Plan Basic</h1>
                                <h2 className="display-4 mb-5">68 <span className="ml-n3" style={{ "fontSize": "1rem" }}>$</span></h2>
                                <ul className="card-text list-unstyled mb-5">
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                </ul>
                                <Link className="btn btn-primary mb-5" to="#">More information</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <div className="card">
                            <div className="card-body justify-content-center text-center">
                                <h1 className="card-title mt-4 mb-5">Plan Advanced</h1>
                                <h2 className="display-4 mb-5">150 <span className="ml-n3" style={{ "fontSize": "1rem" }}>$</span></h2>
                                <ul className="card-text list-unstyled mb-5">
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                </ul>
                                <Link className="btn btn-primary mb-5" to="#">More information</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body justify-content-center text-center">
                                <h1 className="card-title mt-4 mb-5">Plan Standard</h1>
                                <h2 className="display-4 mb-5">89 <span className="ml-n3" style={{ "fontSize": "1rem" }}>$</span></h2>
                                <ul className="card-text list-unstyled mb-5">
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                </ul>
                                <Link className="btn btn-primary mb-5" to="#">More information</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
    </Fragment>


)