import axios from 'axios';
import { SET_CHARACTER, FETCH_CHARACTER } from './types';

const url = `https://gateway.marvel.com:443/v1/public/characters/1009718?ts=2018&apikey=7dfb3087b3b2cdf9659302cc4f49729a&hash=349406ee84f2680659ebcdf5f2168c6b`

export const setCharacter = character => {
    return {
        type: SET_CHARACTER,
        payload: character
    }
}

export const fetchCharacter = (character) => async dispatch => {
    const res = await axios.get(url);
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
        comicsLink: res.data.data.results[0].urls[2].url,
    }

    dispatch({ type: FETCH_CHARACTER, payload: characterInfo });
}


// export const fetchUser = () => async dispatch => {
//     const res = await axios.get('/api/current_user');

//     dispatch({ type: FETCH_USER, payload: res.data });
// };

// export const handleToken = token => async dispatch => {
//     const res = await axios.post('/api/stripe', token);

//     dispatch({ type: FETCH_USER, payload: res.data });
// }

// export const submitSurvey = (values, history) => async dispatch => {
//     const res = await axios.post('/api/surveys', values);
    
//     history.push('/surveys');

//     dispatch({ type: FETCH_USER, payload: res.data });
// };

// export const fetchSurveys = () => async dispatch => {
//     const res = await axios.get('/api/surveys');

//     dispatch({ type: FETCH_SURVEYS, payload: res.data })
// }