import React, { Component } from 'react'

class SearchBar extends Component {
	render() {
		return (
			<div className='row justify-content-center'>
				<div className='col-8'>
					<form>
						<label for='searchCharacter'>Search Character</label>
						<div className='input-group'>
							<input
								type='text'
								className='form-control'
								id='searchCharacter'
								placeholder='Spider-Man'
							/>
							<div className='input-group-append'>
								<button type="button" className='btn btn-danger'>Search</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		)
	}
}

export default SearchBar;
