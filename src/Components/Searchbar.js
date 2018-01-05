import React, { Component } from 'react'
import Autosuggest from 'react-autosuggest';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import characterInfo from '../data/characterInfo.json'


const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : characterInfo.filter(character => {
        return character.name.toLowerCase().slice(0, inputLength) === inputValue
    });
}

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => {
    return (
        <span className='suggestion'>
            {suggestion.name}
        </span>
    )
}

class SearchBar extends Component {
    constructor() {
        super();

        this.state = {
            value: '',
            suggestions: []
        };
    }

    componentDidMount() {
        this.props.clearCharacter();
        this.props.clearEvents();
    }

    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
        this.props.setCharacter(newValue);
    }

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: getSuggestions(value)
        });
    }

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    }

	render() {
        const { value, suggestions } = this.state;

        const inputProps = {
            placeholder: 'Type a character name',
            value,
            onChange: this.onChange
        };

		return (
			<div className='row justify-content-center'>
				<div className='col-8'>
                    <span className='label'>Search Character</span>
                    <div className='input-group'>
                        <Autosuggest
                            className='form-control'
                            suggestions={suggestions}
                            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                            getSuggestionValue={getSuggestionValue}
                            renderSuggestion={renderSuggestion}
                            inputProps={inputProps}
                        />
                        <Route render={({ history }) => (
                            <button
                                type="button"
                                className='button'
                                onClick={() => { history.push('/characterpage') }}
                            >
                                Search
                            </button>
                        )}/>
                    </div>
                </div>
			</div>
		)
	}
}

export default connect(null, actions)(SearchBar);
