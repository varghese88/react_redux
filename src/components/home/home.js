import React from "react";
import {browserHistory} from "react-router";
import {UserList} from "./user-list";
import {setUser,setCurrentName,setCurrentAge,getUsers} from "../../actions/user-action";
import {connect} from "react-redux";
import {bindActionCreators} from "redux"

class Home extends React.Component{

    onChangeName(e){
        this.props.setCurrentName(e.target.value)
        browserHistory.push
    }
    onChangeAge(e){
        this.props.setCurrentAge(e.target.value)
    }
    componentWillMount(){
        this.props.getUsers();
    }
    render(){
        const userDetails = this.props.userDetails;
        console.log(this.props);
        let list = userDetails.posts.map((post,index)=>{
            return (
                <UserList key={index} post={post} />
            );
        }); 

        return (
            <div className="container">
                <div className="form-group">
                    <label>Name:</label>
                    <input value = {userDetails.user.name} onChange={this.onChangeName.bind(this)} type="text" className="form-control" id="usr" />
                </div>
                <div className="form-group">
                    <label>Age:</label>
                    <input value = {userDetails.user.age} onChange={this.onChangeAge.bind(this)}type="text" className="form-control" id="age" />
                </div>
                <button className="btn btn-danger" onClick={()=> this.props.setUser({name:userDetails.user.name,age:userDetails.user.age})}>go to about</button>
                {list}
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        userDetails:state.userdetails
    };
}
const mapDispatchToProps = (dispatch)=>{


    return  bindActionCreators({
                setUser:setUser,
                setCurrentName:setCurrentName,
                setCurrentAge:setCurrentAge,
                getUsers:getUsers
            },dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);