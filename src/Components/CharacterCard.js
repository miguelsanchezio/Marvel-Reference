import React, { Component } from 'react'
import { Link } from 'react-router-dom';


class CharacterCard extends Component {
    render() {
        const { info } = this.props;

        return (
            <div className='row justify-content-center'>
                <div className='col-8'>
                    <div className='character-card'>
                        <div className='character-main-info'>
                            <div className='character-img'>
                                <img src={info.imgUrl} alt={info.name}/>
                            </div>
                            <div className='character-summary'>
                                <h2 className='character-name'>{info.name}</h2>
                                <p>{info.description !== '' ? info.description : `No description available. Find out more about ${info.name} by clicking on the links below.`}</p>
                                <span className='character-appearances'>Number of appearances</span>
                                <ul className='appearances-list'>
                                    <li>{info.comicsNumber > 0 ? info.comicsNumber : 0} comics</li>
                                    <li>{info.seriesNumber > 0 ? info.seriesNumber : 0} series</li>
                                    <li>{info.storiesNumber > 0 ? info.storiesNumber : 0} stories</li>
                                    <li>{info.eventsNumber > 0 ? info.eventsNumber : 0} events</li>
                                </ul>
                                <Link to='/' className='character-card-a'>Go Back</Link>
                            </div>
                        </div>
                        <div className='character-side-info'>
                            <span className='character-find-out'>Find out more about <strong>{info.name}</strong> - </span>
                            <a href={info.marvelLink} target='_blank' className='character-find-out-a'>Marvel's Official Website | </a>
                            <a href={info.wikiLink} target='_blank' className='character-find-out-a'>Marvel's Official Wiki | </a>
                            <a href={info.comicsLink} target='_blank' className='character-find-out-a'>{info.name} Comics</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CharacterCard;
