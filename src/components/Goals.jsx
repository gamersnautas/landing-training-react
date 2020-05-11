import React, { Fragment } from 'react'

/* Font-Awesome */

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDumbbell, faFistRaised, faPrayingHands} from '@fortawesome/free-solid-svg-icons'

export const Goals = () => {

    return (

        <Fragment>

            <div className="shape-1"></div>

            <section className="content-icons" id="goals">
                <div className="container text-center text-white">
                    <h1>What goals do you achieve with us?</h1>
                    <div className="row justify-content-center text-center mt-5">
                        <div className="col-md-4 mt-md-0 mt-5">
                            <h4>Aerobic fitness</h4>
                            <FontAwesomeIcon icon={faDumbbell} size="5x"/>
                        </div>
                        <div className="col-md-4 mt-md-0 mt-5">
                            <h4>Muscle strengthening</h4>
                            <FontAwesomeIcon icon={faFistRaised} size="5x"/>
                        </div>
                        <div className="col-md-4 mt-md-0 mt-5">
                            <h4>Flexibility</h4>
                            <FontAwesomeIcon icon={faPrayingHands} size="5x"/>
                        </div>
                    </div>
                </div>
            </section>

            <div className="arrow-shape"></div>

        </Fragment>
    )
}