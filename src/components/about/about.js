import React from "react";

export class About extends React.Component{
    render(){
        console.log("testing",this.props);
        return (
            <div className="container">
                <div className="form-group">
                    <label>Name:</label>
                    
                </div>
                <div className="form-group">
                    <label>Age:</label>
                </div>
            </div>
        );
    }
}