import React from 'react'

export const Info = () => (


    <section className="info" id="about">
        <div className="container">
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">About us</a>
                    <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Trainings</a>
                    <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Foods</a>
                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                    <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsam id laboriosam.
                    Voluptatum
                    perferendis voluptatem quaerat facilis tenetur autem rem facere maxime quasi cupiditate incidunt
                culpa accusamus, quis ipsum ducimus?</p>
                </div>
                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                    <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsam id laboriosam.
                    Voluptatum
                    perferendis voluptatem quaerat facilis tenetur autem rem facere maxime quasi cupiditate incidunt
                culpa accusamus, quis ipsum ducimus?</p>
                </div>
                <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                    <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ipsam id laboriosam.
                    Voluptatum
                    perferendis voluptatem quaerat facilis tenetur autem rem facere maxime quasi cupiditate incidunt
                culpa accusamus, quis ipsum ducimus?</p>
                </div>
            </div>
        </div>
    </section>

    
)