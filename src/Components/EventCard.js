import React, { Component } from 'react'

class EventCard extends Component {
    render() {
        const { info } = this.props;

        return (
            <div className='event-card'>
            {console.log(info)}
                <div className='event-info'>
                    <div className='event-img'>
                        <img src={info.imgUrl} alt={info.name}/>
                    </div>
                    <div className='event-summary'>
                        <h4 className='event-name'>{info.title}</h4>
                        <p className='event-summary-p'>{info.description}</p>
                        <span className='event-misc'>Event Info</span>
                        <ul className='event-numbers-list'>
                            <li>{info.creatorsNumber > 0 ? info.creatorsNumber : 0} creators</li>
                            <li>{info.charactersNumber > 0 ? info.charactersNumber : 0} characters</li>
                            <li>{info.storiesNumber > 0 ? info.storiesNumber : 0} stories</li>
                            <li>{info.comicsNumber > 0 ? info.comicsNumber : 0} comics</li>
                            <li>{info.seriesNumber > 0 ? info.seriesNumber : 0} series</li>
                        </ul>
                        <span className='event-misc'>Previous Event</span>
                        <p className='event-misc-p'>{info.prevEvent}</p>
                        <span className='event-misc'>Next Event</span>
                        <p className='event-misc-p'>{info.nextEvent}</p>
                    </div>
                </div>
                <div className='event-side-info'>
                    <span className='event-find-out'>Find out more about <strong>{info.title}</strong> - </span>
                    <a href={info.detailLink} target='_blank' className='event-find-out-a'>Marvel's Official Website | </a>
                    <a href={info.wikiLink} target='_blank' className='event-find-out-a'>Marvel's Official Wiki </a>
                </div>
            </div>
        )
    }
}

export default EventCard;
