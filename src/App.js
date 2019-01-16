import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

class App extends Component {

  state = {
    user: {username: "up username"}
  };

  updateUsername = (event) => {
      this.setState({
        user: {
          username: event.target.value
        }
      });

      console.log(this.state.user.username);
  }

  render() {

    return (
      <div className="App">
        <UserInput
          username={this.state.user.username}
          updateUsername={this.updateUsername}
        />

        <UserOutput username="rudiwijaya" />

        <UserOutput username={this.state.user.username} />

      </div>
    );
  }
}

export default App;
