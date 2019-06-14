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
            Title: '',
            Year: '',
            Platform: ''
        }
    }

    onChangeTitle (e) {
        this.setState({
            Title: e.target.value
        });
    }

    onChangeYear (e) {
        this.setState({
            Year: e.target.value
        });
    }

    onChangePlatform (e) {
        this.setState({
            Platform: e.target.value
        });
    }

    onSubmit (e) {
        e.preventDefault();

        console.log('Form submitted:');
        console.log(`Title: ${this.state.Title}`);
        console.log(`Year: ${this.state.Year}`);
        console.log(`Platform: ${this.state.Platform}`);
        
        const newGame = {
            Title: this.state.Title,
            Year: this.state.Year,
            Platform: this.state.Platform
        }

        axios.post('http://localhost:4000/rml/add', newGame)
             .then(res => console.log(res.data));

        this.setState({
            Title: '',
            Year: '',
            Platform: ''
        })
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                <h3>Add game</h3>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Game Title: </label>
                        <input type='text' 
                               className='form-control' 
                               value={this.state.Title}
                               onChange={this.onChangeTitle}
                               />
                    </div>
                    <div className='form-group'>
                        <label>Release Year: </label>
                        <input type='text' 
                               className='form-control' 
                               value={this.state.Year}
                               onChange={this.onChangeYear}
                               />
                    </div>
                    <div className='form-group'>
                        <label>Platform: </label>
                        <input type='text' 
                               className='form-control' 
                               value={this.state.Platform}
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