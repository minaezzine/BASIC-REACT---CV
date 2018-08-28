import React, {Component} from "react";
import { ProgressBar } from 'react-bootstrap';
import "./pro.css";
class Pro extends Component{
	render() {
        
        return(
   
        <div >
        <p className="p3">{this.props.nom}</p>
        <ProgressBar className="bar" active now={this.props.val} />
           </div>
            
            
			);
	}
}

export default Pro;