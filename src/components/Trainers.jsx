import React from 'react'

/* Images */

import Trainer1 from '../images/trainer1.jpg'
import Trainer2 from '../images/trainer-2.jpg'
import Trainer3 from '../images/trainer-3.jpg'

export const Trainers = () => (

    <section className="info-trainers" id="trainers">
        <div className="container text-center">
            <h1>Trainers</h1>
            <div className="row justify-content-center mt-5">
                <div className="col-md-4 mb-4">
                    <img src={Trainer1} className="img-fluid rounded-circle col-8 " alt="" />
                    <h2 className="mt-3">Mike Smith</h2>
                </div>
                <div className="col-md-4 mb-4">
                    <img src={Trainer2} className="img-fluid rounded-circle col-8" alt="" />
                    <h2 className="mt-3">Lana Mitchell</h2>
                </div>
                <div className="col-md-4 mb-4">
                    <img src={Trainer3} className="img-fluid rounded-circle col-8" alt="" />
                    <h2 className="mt-3">Stuart Krewtz</h2>
                </div>
            </div>
        </div>
    </section>
)