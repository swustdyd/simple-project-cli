import React from 'react'
import ReactDom from 'react-dom'

import './app.scss'

class App extends React.Component{

    constructor(){
        super();
        this.state = {
            session: {
                cookie: {}
            }
        }
    }

    componentDidMount(){
        fetch('http://localhost:3001/index')
            .then((res) => {
                return res.json()
            }).then((data) => {
                this.setState({session: data});
            })
    }

    render(){
        const {session} = this.state;
        return(
            <div>
                <h1>Simple Project</h1>
                <h3>Session.cookie</h3>
                <ul>
                    <li>{session.cookie.expires}</li>
                    <li>{session.cookie.httpOnly + ''}</li>
                    <li>{session.cookie.originalMaxAge}</li>
                </ul>
            </div>
        );
    }
}

ReactDom.render(
    <App />,
    document.getElementById('app')
);
