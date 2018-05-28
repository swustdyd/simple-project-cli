import React from 'react'
import ReactDom from 'react-dom'
import {HashRouter, Route, Redirect} from 'react-router-dom'
import baseConfig from '../../configs/base'
import HMFLayout from './layout/hmfLayout'
import lrLayout from './layout/lrLayout'
import Footer from './layout/footer'
import Nav from './layout/nav'
import asyncComponent from './components/asyncComponent'

const IndexPage = asyncComponent(() => import('./pages/index'));
const AbuotPage = asyncComponent(() => import('./pages/about'));
const LayoutDemo = asyncComponent(() => import('./pages/layoutDemo'))

import './app.scss'

class App extends React.Component{

    constructor(){
        super();
    }

    render(){
        return(
            <HashRouter>
                <HMFLayout
                    header={Nav}
                    content={
                        <div>
                            <Route exact path="/" render={() => <Redirect to="/index"/>}/>
                            <Route path="/index" component={IndexPage}/>
                            <Route path="/about" component={AbuotPage}/>
                            <Route path="/layoutDemo" component={LayoutDemo}/>
                        </div>
                    }
                    footer={Footer}
                />                
            </HashRouter>
        );
    }
}

ReactDom.render(
    <App />,
    document.getElementById('app')
);
