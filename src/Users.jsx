import React from 'react';
import axios from 'axios';

class Users extends React.Component{
    state = {
        users: [ ] // if we will pass a object in array instaed of empty array
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then( (ajaxRes) => {
            let newState = {
                users: ajaxRes.data
            }
            this.setState(newState)
        })
    }

    getUsersList(){
        var userTags = [];
        for(var i=0; i<this.state.users.length; i++){
            userTags.push(<h2 key={i}>{this.state.users[i]['name']}</h2>)
        }
        return userTags;
    }

    render(){
        
        return <div>
            <h1>Users</h1>
            {this.getUsersList()}
        </div>
    }
}

export default Users;