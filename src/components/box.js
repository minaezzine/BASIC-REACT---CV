
import React, {Component} from "react";
import "./box.css";
class Box extends Component{
	render() {
        
        return(
   
        <div className="p2">
            <p>{this.props.des1}</p>
            <p>{this.props.des2}</p>
                
				
            
			</div>
            
            
			);
	}
}

export default Box;


