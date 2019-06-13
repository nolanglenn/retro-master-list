import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Game = props => (
    <tr>
        <td>{ props.game.title }</td>
        <td>{ props.game.year }</td>
        <td>{ props.game.platform }</td>
        <td>
            <Link to={'/add/' + props.game.id}>Add Game</Link>
        </td>
    </tr>
)

export default class List extends Component {

    constructor(props) {
        super(props);
        
        this.state = { games: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/games')
             .then(response => {
                 this.setState({ games: response.data });
             })
             .catch(function(error) {
                 console.log(error);
             });
    }

    gameList() {
        return this.state.games.map(function(currentGame, i) {
            return <Game game={currentGame} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <h3>Retro Master List</h3>
                <table className='table table-striped' style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Release year</th>
                            <th>Platform</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.gameList() }
                    </tbody>
                </table>
            </div>
        )
    }
}