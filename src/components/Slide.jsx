import React from 'react'

export const Slide = () =>(

    <div id="bg-home" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#bg-home" data-slide-to="0" className="active"></li>
            <li data-target="#bg-home" data-slide-to="1"></li>
            <li data-target="#bg-home" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="bg-man">
                    <div className="dark">
                        <div className="container h-100">
                            <div className="row justify-content-center align-items-center h-100">
                                <div className="caption justify-content-center text-center">
                                    <div className="col-12">
                                        <h1 className="mb-3">Train with us!</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, repellendus!
                                            Temporibus, tempora. Id, facilis harum maxime fuga, est, ratione unde
                                            aliquid deleniti debitis qui non esse repellendus aspernatur optio! Numquam!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <div className="bg-woman-1">
                    <div className="dark">
                        <div className="container h-100">
                            <div className="row justify-content-center align-items-center h-100">
                                <div className="caption justify-content-center text-center">
                                    <div className="col-12">
                                        <h1 className="mb-3">Train with us!</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, repellendus!
                                            Temporibus, tempora. Id, facilis harum maxime fuga, est, ratione unde
                                            aliquid deleniti debitis qui non esse repellendus aspernatur optio! Numquam!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <div className="bg-woman-2">
                    <div className="dark">
                        <div className="container h-100">
                            <div className="row justify-content-center align-items-center h-100">
                                <div className="caption justify-content-center text-center">
                                    <div className="col-12">
                                        <h1 className="mb-3">Train with us!</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, repellendus!
                                            Temporibus, tempora. Id, facilis harum maxime fuga, est, ratione unde
                                            aliquid deleniti debitis qui non esse repellendus aspernatur optio! Numquam!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a className="carousel-control-prev" href="#bg-home" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#bg-home" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
    </div>
)