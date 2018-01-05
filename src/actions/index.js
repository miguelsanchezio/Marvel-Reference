import axios from 'axios';
import characterInfo from '../data/characterInfo.json'
import { SET_CHARACTER, FETCH_CHARACTER, FETCH_EVENTS } from './types';

export const setCharacter = character => {
    const characterQuery = characterInfo.filter(info => {
        return info.name.toLowerCase() === character.toLowerCase();
    });

    return {
        type: SET_CHARACTER,
        payload: characterQuery
    }
}

export const clearCharacter = () => {
    return {
        type: FETCH_CHARACTER,
        payload: []
    }
}

export const clearEvents = () => {
    return {
        type: FETCH_EVENTS,
        payload: []
    }
}

export const fetchCharacter = (id) => async dispatch => {
    const url = `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=2018&apikey=7dfb3087b3b2cdf9659302cc4f49729a&hash=349406ee84f2680659ebcdf5f2168c6b`

    const res = await axios.get(url);

    let comicsLink;
    if(!res.data.data.results[0].urls[2]) {
        comicsLink = 'https://marvel.com';
    } else {
        comicsLink = res.data.data.results[0].urls[2].url;
    }

    const characterInfo = {
        name: res.data.data.results[0].name,
        id: res.data.data.results[0].id,
        imgUrl: `${res.data.data.results[0].thumbnail.path}.jpg`,
        description: res.data.data.results[0].description,
        comicsNumber: res.data.data.results[0].comics.available,
        seriesNumber: res.data.data.results[0].series.available,
        storiesNumber: res.data.data.results[0].stories.available,
        eventsNumber: res.data.data.results[0].events.available,
        marvelLink: res.data.data.results[0].urls[0].url,
        wikiLink: res.data.data.results[0].urls[1].url,
        comicsLink
    }

    dispatch({ type: FETCH_CHARACTER, payload: characterInfo });
}

export const fetchEvents = (characterId) => async dispatch => {
    const url = `https://gateway.marvel.com:443/v1/public/characters/${characterId}/events?limit=50&ts=2018&apikey=7dfb3087b3b2cdf9659302cc4f49729a&hash=349406ee84f2680659ebcdf5f2168c6b`

    const res = await axios.get(url);
    const events = res.data.data.results;
    const eventsInfo = events.map(event => {
        let wikiLink;
        if(!event.urls[1]) {
            wikiLink = 'https://marvel.com';
        } else {
            wikiLink = event.urls[1].url;
        }

        let nextEvent;
        if(!event.next) {
            nextEvent = 'To be announced';
        } else {
            nextEvent = event.next.name;
        }

        let prevEvent;
        if(!event.previous) {
            prevEvent = 'No previous event';
        } else {
            prevEvent = event.previous.name;
        }
        
        return {
            id: event.id,
            title: event.title,
            imgUrl: `${event.thumbnail.path}.jpg`,
            description: event.description,
            detailLink: event.urls[0].url,
            wikiLink,
            creatorsNumber: event.creators.available,
            charactersNumber: event.characters.available,
            storiesNumber: event.stories.available,
            comicsNumber: event.comics.available,
            seriesNumber: event.series.available,
            nextEvent,
            prevEvent
        }
    })

    dispatch({ type: FETCH_EVENTS , payload: eventsInfo });
}