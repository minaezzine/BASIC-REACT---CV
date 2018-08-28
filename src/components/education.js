import React, { Component } from 'react';
import base from '../base';
import'../App.css';
import Par from './par';


class Education extends Component {
    state={
        edu:{}
    }
    componentDidMount(){
        this.ref=base.syncState(`edu`,{
            context:this,
            state:'edu'
        });
        console.log(this.state.edu);
    }
  render() {
    return (

    <div className="">
    {Object.keys(this.state.edu).map(
        key=> <Par
        key={key}
        val={this.state.edu[key].val}
        />
    )}
 </div>

    );
  }
}

export default Education;