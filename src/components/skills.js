import React, { Component } from 'react';
import base from '../base';
import'../App.css';
import Pro from './pro';


class Skills extends Component {
    state={
        skills:{}
    }
    componentDidMount(){
        this.ref=base.syncState(`skills`,{
            context:this,
            state:'skills'
        });
        console.log(this.state.skills);
    }
  render() {
    return (

    <div>
    {Object.keys(this.state.skills).map(
        key=> <Pro
        key={key}
        nom={this.state.skills[key].nom}
       val={this.state.skills[key].val}/>
    )}
 </div>

    );
  }
}

export default Skills;