import axios from 'axios';
import characterInfo from '../data/characterInfo.json'
import { SET_CHARACTER, FETCH_CHARACTER } from './types';

export const setCharacter = character => {
    const characterQuery = characterInfo.filter(name => {
        return name.name === character;
    });

    return {
        type: SET_CHARACTER,
        payload: characterQuery
    }
}

export const fetchCharacter = (id) => async dispatch => {
    const url = `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=2018&apikey=7dfb3087b3b2cdf9659302cc4f49729a&hash=349406ee84f2680659ebcdf5f2168c6b`

    const res = await axios.get(url);

    let comicUrl;
    if(!res.data.data.results[0].urls[2]) {
        comicUrl = 'https://marvel.com';
    } else {
        comicUrl = res.data.data.results[0].urls[2].url;
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
        comicsLink: comicUrl
        // res.data.data.results[0].urls[2].url
    }

    dispatch({ type: FETCH_CHARACTER, payload: characterInfo });
}