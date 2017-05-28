import React, {Component} from 'react';
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
            parsedResponse => this.setState({topScorers: parsedResponse.data.topscorers})
        ).catch(
            error => console.log(error)
        )
    }

    render() {
        return (

            <div className="App">
                <header className="container header">
                    <img src="logo.png" alt="logo serie A" className="App-logo"/>
                    <div className="head">
                        <h1>Top strzelcy Serie A</h1>
                        <p>sezon 2016/2016</p>
                    </div>
                </header>
                <section>
                    <div className="container">
                        {
                            this.state.topScorers === null ? null :
                                <table className="table table-responsive">
                                    <thead className="thead">
                                    <tr>
                                        <th>POZYCJA</th>
                                        <th>ZAWODNIK</th>
                                        <th>GOLE</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        this.state.topScorers.slice(0, 10).map(
                                            (scorer, index) => (
                                                <tr key={scorer.identifier} className="scorer">
                                                    <td className="my-cell">{index + 1}</td>
                                                    <td className="my-cell">{scorer.fullname}</td>
                                                    <td className="my-cell">{scorer.goals}</td>
                                                </tr>
                                            )
                                        )
                                    }
                                    </tbody>
                                </table>
                        }
                    </div>
                </section>

                <footer className="footer">
                    <div className="powered">powered by PGS</div>
                </footer>
            </div>


        );
    }
}

export default App;


