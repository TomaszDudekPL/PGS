import React, { Component } from 'react';
import { Grid, Table} from 'react-bootstrap'
import './App.css';


class App extends Component {


    state = {
        topScorers: null
    };

    componentWillMount() {
        fetch(
            'https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/serie-a/seasons/15-16/topscorers', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Mashape-Key': 'kxSXmUymofmshFHhhKxWOSJpqJsJp1I3zNnjsnqKwhITAiC1zw'
                }
            }
        ).then(
            response => response.json()
        ).then(
            parsedResponse => this.setState({ topScorers: parsedResponse.data.topscorers })
        ).catch(
            error => console.log(error)
        )
    }

    render() {
        return (
            <div className="App">
                {
                    this.state.topScorers === null ? null :
                        <table>
                            <thead>
                            <tr>
                                <th>Pozycja</th>
                                <th>Zawodnik</th>
                                <th>Gole</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.topScorers.slice(0, 10).map(
                                    (scorer, index) => (
                                        <tr key={scorer.identifier}>
                                            <td>{index + 1}</td>
                                            <td>{scorer.fullname}</td>
                                            <td>{scorer.goals}</td>
                                        </tr>
                                    )
                                )
                            }
                            </tbody>
                        </table>
                }
            </div>
        );
    }
}

export default App;


