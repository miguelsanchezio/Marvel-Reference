import React, { Component } from 'react'
import Autosuggest from 'react-autosuggest';
import { withRouter } from 'react-router-dom';
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

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.unsetCharacter()
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

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit');
        this.props.history.push('/characterpage');
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
				<div className='form-container'>
                    <form onSubmit={this.handleSubmit}>
                        <label className='label'>Search a character</label>
                        <div className='input-group'>
                            <Autosuggest
                                suggestions={suggestions}
                                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                                getSuggestionValue={getSuggestionValue}
                                renderSuggestion={renderSuggestion}
                                inputProps={inputProps}
                            />
                            <button className='button'>Search</button>
                        </div>
                    </form>
                </div>
			</div>
		)
	}
}

export default connect(null, actions)(withRouter(SearchBar));
