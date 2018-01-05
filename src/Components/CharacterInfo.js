import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';

import CharacterCard from './CharacterCard';
import EventCard from './EventCard';

class CharacterInfo extends Component {
    componentDidMount() {
        this.props.fetchCharacter(this.props.characterQuery[0].id);
        this.props.fetchEvents(this.props.characterQuery[0].id);
    }

    render() {
        

        const noCharacterCard = <div className='loading'>Loading...</div>
        const characterCard = <CharacterCard info={this.props.characterInfo}/>;
        
        const noEventCards = <div className='loading'>Loading...</div>
        const events = this.props.eventsInfo;
        const eventCards = events.map(event => {
            return (
                <EventCard info={event} key={event.id}/>
            )
        })
        
        return (
            <div>
                {console.log(this.props.eventsInfo)}
                {this.props.characterInfo.name ? characterCard : noCharacterCard}

                <div className='row justify-content-center'>
                    <div className='col-8 text-center'>
                        <h3 className='c-info-h3'>{this.props.characterInfo.name} has appeared in these events</h3>
                    </div>
                </div>

                <div className='row justify-content-center'>
                    <div className='col-8'>
                        <div className='events-container'>
                            {this.props.eventsInfo ? eventCards : noEventCards}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ characterQuery, characterInfo, eventsInfo }) {
    return { characterQuery, characterInfo, eventsInfo};
}

export default connect(mapStateToProps, actions)(CharacterInfo);
