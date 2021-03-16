import React from 'react';

class Hello extends React.Component{
    state = {
        users: [],
        currentUser : ""
    };

    updateInputValue(event){
        this.state.currentUser = event.target.value;// ?? event ??
        this.setState(this.state);
    }

    onSubmit(){
        
        let newUser = {
            name: this.state.currentUser
        }
        this.state.users.push(newUser);
        this.state.currentUser = ""; // we empty the input box by assigning empty string
        console.log(this.state);
        this.setState(this.state);
    }

    renderUserList(){
        let userList = this.state.users.map(function(singleUser){
            return <h1 key={singleUser.name}>{singleUser.name} <button className="form-btn">Del</button> <button className="form-btn">Edit</button> </h1>
        });
        return userList;
    }
    render(){
        return <div>
            <input name="username" placeholder="Enter Your name" value={this.state.currentUser} onChange={this.updateInputValue.bind(this)} /> <br />
            <button onClick={this.onSubmit.bind(this)}>
                Add User
            </button>
            <hr/>
            {
                this.renderUserList()
            }
        </div>
    }
}

export default Hello;