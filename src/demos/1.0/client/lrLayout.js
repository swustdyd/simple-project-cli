/**
 * Created by Aaron on 2018/3/2.
 */
import React from 'react'

class LRLayout extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            collapsed: false
        }
    }

    handleMenuIconClick(){
        this.setState({
            collapsed: !this.state.collapsed
        })
    }

    render() {
        const {collapsed} = this.state;
        return (
            <div ref="lrLayout" className="lr-layout">
                <div
                    className="left-layout"
                    collapsed={this.state.collapsed}
                >
                    {this.props.left}
                </div>
                <div className="right-layout">
                    {this.props.right}
                </div>
            </div>
        );
    }
}

export default LRLayout;