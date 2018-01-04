import React, { Component } from 'react'
import CharacterCard from './CharacterCard';
import EventCard from './EventCard';

class CharacterInfo extends Component {
    render() {
        return (
            <div>
                <CharacterCard/>

                <div className='row justify-content-center'>
                    <div className='col-8 text-center'>
                        <h3 className='c-info-h3'>Spider-Man has appeared in these events</h3>
                    </div>
                </div>

                <div className='row justify-content-center'>
                    <div className='col-8'>
                        <div className='events-container'>
                            <EventCard/>
                            <EventCard/>
                            <EventCard/>
                            <EventCard/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CharacterInfo;
