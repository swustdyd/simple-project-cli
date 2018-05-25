import React from 'react'
import ReactDom from 'react-dom'
import baseConfig from '../../configs/base'

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
        fetch(`${baseConfig.serverHost}:${baseConfig.serverPort}/index`)
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
                <h1 className="title">
                    <span className="icon-logo"></span>
                    <span>Simple Project</span>
                </h1>
                <h3>Session.cookie</h3>
                <ul>
                    <li><label>expires:</label>{session.cookie.expires}</li>
                    <li><label>httpOnly:</label>{session.cookie.httpOnly + ''}</li>
                    <li><label>originalMaxAge:</label>{session.cookie.originalMaxAge}</li>
                </ul>
            </div>
        );
    }
}

ReactDom.render(
    <App />,
    document.getElementById('app')
);
