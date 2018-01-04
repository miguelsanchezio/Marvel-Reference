import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import SearchBar from './Searchbar';
import Footer from './Footer';
import CharacterInfo from './CharacterInfo';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container-fluid">
                    <Header/>
                    <Route exact path='/' component={SearchBar}/>
                    <Route exact path='/characterinfo' component={CharacterInfo}/>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
