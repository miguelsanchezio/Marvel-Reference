import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import CharacterInfo from './CharacterInfo';

class CharacterPage extends Component {
    render() {
        const notFound = (
            <div className='row justify-content-center'>
                <div className='col-8 text-center'>
                    <h3 className='c-info-h3'>
                        Character not found. Try again.
                    </h3>
                    <Link to='/' className='not-found-link'>Search again</Link>
                </div>
            </div>
        )

        return (
            <div>
                {this.props.characterQuery === null || this.props.characterQuery.length === 0
                    ? notFound
                    : <CharacterInfo/>
                }
            </div>
        )
    }
}

function mapStateToProps({ characterQuery }) {
    return { characterQuery };
}

export default connect(mapStateToProps)(CharacterPage);
