import React, { Component } from 'react';
import base from '../base';
import'../App.css';
import Box from './box';


class profiles extends Component {
    state={
        info:{}
    }
    componentDidMount(){
        this.ref=base.syncState(`info`,{
            context:this,
            state:'info'
        });
        console.log(this.state.info);
    }
  render() {
    return (
<center>
    <div className="">
    {Object.keys(this.state.info).map(
        key=> <Box
        key={key}
        des1={this.state.info[key].des1}
        des2={this.state.info[key].des2}/>
    )}
 </div>
</center>
    );
  }
}

export default profiles;