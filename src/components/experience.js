import React, { Component } from 'react';
import base from '../base';
import'../App.css';
import Par from './par';


class experience extends Component {
    state={
        exp:{}
    }
    componentDidMount(){
        this.ref=base.syncState(`exp`,{
            context:this,
            state:'exp'
        });
        console.log(this.state.exp);
    }
  render() {
    return (

    <div className="">
    {Object.keys(this.state.exp).map(
        key=> <Par
        key={key}
        val={this.state.exp[key].val}
        />
    )}
 </div>

    );
  }
}

export default experience;