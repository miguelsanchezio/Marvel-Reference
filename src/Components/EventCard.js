import React, { Component } from 'react'

class EventCard extends Component {
    render() {
        return (
            <div className='event-card'>
                <div className='event-info'>
                    <div className='event-img'>
                        <img src='img/event-img.jpg'/>
                    </div>
                    <div className='event-summary'>
                        <h4 className='event-name'>Acts of Vengeance!</h4>
                        <p className='event-summary-p'>Loki sets about convincing the super-villains of Earth to attack heroes other than those they normally fight in an attempt to destroy the Avengers to absolve his guilt over inadvertently creating the team in the first place.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default EventCard;
