import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';

import CharacterCard from './CharacterCard';
import EventCard from './EventCard';

class CharacterInfo extends Component {
    componentDidMount() {
        this.props.fetchCharacter(this.props.characterQuery[0].id);
    }

    render() {

        const characterCard = <CharacterCard info={this.props.characterInfo}/>;
        const noCharacterCard = <div className='loading'>Loading...</div>
        
        return (
            <div>
                {this.props.characterInfo.name ? characterCard : noCharacterCard}

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

function mapStateToProps({ characterQuery, characterInfo }) {
    return { characterQuery, characterInfo};
}

export default connect(mapStateToProps, actions)(CharacterInfo);
