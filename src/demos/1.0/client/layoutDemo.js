import React from 'react'
import LRLoyout from '../layout/lrLayout'

export default class LayoutDemo extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <LRLoyout 
                left={
                    <div>left</div>
                }
                right={
                    <div style={{height: 400}}>right</div>
                }
            />
        );
    }
}