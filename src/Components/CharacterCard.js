import React, { Component } from 'react'

class CharacterCard extends Component {
    render() {
        return (
            <div className='row justify-content-center'>
                <div className='col-8'>
                    <div className='character-card'>
                        <div className='character-main-info'>
                            <div className='character-img'>
                                <img src='http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b.jpg'/>
                            </div>
                            <div className='character-summary'>
                                <h2 className='character-name'>Spider-Man</h2>
                                <p>Bitten by a radioactive spider, high school student Peter Parker gained the speed, strength and powers of a spider. Adopting the name Spider-Man, Peter hoped to start a career using his new abilities. Taught that with great power comes great responsibility, Spidey has vowed to use his powers to help people.</p>
                                <span className='character-appearances'>Number of appearances</span>
                                <ul className='appearances-list'>
                                    <li>123 comics</li>
                                    <li>123 series</li>
                                    <li>123 events</li>
                                </ul>
                            </div>
                        </div>
                        <div className='character-side-info'>
                            <span className='character-find-out'>Find out more - </span>
                            <a href='#' className='character-find-out-a'>Marvel's Official Website | </a>
                            <a href='#' className='character-find-out-a'>Marvel's Official Wiki | </a>
                            <a href='#' className='character-find-out-a'>Spider-Man Comics</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CharacterCard;
