

import React, {Component} from "react";
import { ProgressBar } from 'react-bootstrap';

import "./pro.css";
class Pro extends Component{
	render() {
        
        return(
   
        <div >
        <p className="p3">{this.props.des}</p>
        <ProgressBar className="bar" active now={this.props.num} />
           </div>
            
            
			);
	}
}

export default Pro;