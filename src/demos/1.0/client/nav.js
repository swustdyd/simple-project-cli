/**
 * Created by Aaron on 2018/3/26.
 */
import React from 'react'
import {Link} from 'react-router-dom'
import Menu from '../components/menu'
import Util from '../util'

class Nav extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            defaultItemKey: Util.getHashPath(0)
        }
    }
    componentDidMount(){
        this.setState({
            defaultItemKey: Util.getHashPath(0)
        });
    }
    render() {        
        const {defaultItemKey} = this.state;
        return (
            <div className="nav">
                <span className="logo">
                    <span className="icon-logo"></span>
                </span>
                <Menu defaultItemKey={defaultItemKey}>
                    <span itemKey="index">
                        <Link to="/">主页</Link>
                    </span>
                    <span itemKey="about">
                        <Link to="/about">关于</Link>
                    </span>
                    <span itemKey="layoutDemo">
                        <Link to="/layoutDemo">layoutDemo</Link>
                    </span>
                </Menu>
            </div>
        )
    }
}

export default Nav