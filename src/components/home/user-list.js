import React from "react";

export class UserList extends React.Component{
    render(){
        
        return (
            <div className="container">
                <div className="form-group">
                    <label>Name:</label>
                    <span>{this.props.post.title}</span>
                </div>
                <div className="form-group">
                    <label>Age:</label>
                    <span>{this.props.post.body}</span>
                </div>
            </div>
        );
    }
}