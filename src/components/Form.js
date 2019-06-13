import React, { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {

    constructor (props) {
        super(props);

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePlatform = this.onChangePlatform.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            title: '',
            year: '',
            platform: ''
        }
    }

    onChangeTitle (e) {
        this.setState({
            title: e.target.value
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
        console.log(`Title: ${this.state.title}`);
        console.log(`Year: ${this.state.year}`);
        console.log(`Platform: ${this.state.platform}`);
        
        const newGame = {
            title: this.state.title,
            year: this.state.year,
            platform: this.state.platform
        }

        axios.post('http://localhost:4000/games/add', newGame)
             .then(res => console.log(res.data));

        this.setState({
            title: '',
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
                               value={this.state.title}
                               onChange={this.onChangeTitle}
                               />
                    </div>
                    <div className='form-group'>
                        <label>Release year: </label>
                        <input type='text' 
                               className='form-control' 
                               value={this.state.year}
                               onChange={this.onChangeYear}
                               />
                    </div>
                    <div className='form-group'>
                        <label>Platform: </label>
                        <input type='text' 
                               className='form-control' 
                               value={this.state.platform}
                               onChange={this.onChangePlatform}
                               />
                    </div>
                    <div className='form-group'>
                        <input type='submit' value='Add game' className='btn btn-primary' />
                    </div>
                </form>
            </div>
        )
    }
}