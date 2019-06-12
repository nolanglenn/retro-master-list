import React, { Component } from 'react';

export default class Form extends Component {

    constructor (props) {
        super(props);

        this.onChangeGame = this.onChangeGame.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePlatform = this.onChangePlatform.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            game: '',
            year: '',
            platform: ''
        }
    }

    onChangeGame (e) {
        this.setState({
            game: e.target.value
        });
    }

    onChangeYear (e) {
        this.setState({
            year: e.target.value
        });
    }

    onChangePlatform (e) {
        this.setState({
            platform: e.target.value
        });
    }

    onSubmit (e) {
        e.preventDefault();

        console.log('Form submitted:');
        console.log(`Game: ${this.state.game}`);
        console.log(`Year: ${this.state.year}`);
        console.log(`Platform: ${this.state.platform}`);
        
        

        this.setState({
            game: '',
            year: '',
            platform: ''
        })
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Add game</h3>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Game title: </label>
                        <input type='text' 
                               className='form-control' 
                               value={this.state.game}
                               onChange={this.onChangeGame}
                               />
                    </div>
                </form>
            </div>
        )
    }
}