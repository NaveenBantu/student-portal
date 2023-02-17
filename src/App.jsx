import React, { Component, useState } from 'react';
import './App.css';
//import { users } from './users';

import UserList from './components/UserList';

// // Functional Component - Dumb ones - UI 
// function App() {
//   return (
//     <h1>Hello World!!!</h1>
//   )
// }

// Class Component - Smart ones - Logic, state - data
class App extends Component {

  // Initializing the State
  // state = {
  //   counter: users.length,
  //   users: users
  // }

  // Constructor initialises the state and passes the props to the parent Component class
  constructor(props) {
    super(props);
    // Initial State
    this.state = {
      users: [],
      counter: 0,
      searchText: ""
    }
    console.log("App - constructor")
  }


  // Method that runs after the Component is run for the first time - can be used for initial data fetch
  componentDidMount() {
    console.log("App - Component Did Mount");
    // Fetching data
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      // Updating the state after the data is fetched
      .then(userData => this.setState({ users: userData, counter: userData.length }))
      .catch(error => console.log(error))
  }

  // Method that run after every re-render of the component (after every state change)
  componentDidUpdate(prevState, prevProps) {
    console.log("App - component did update ", prevProps)
    console.log("fetching with updated state ", this.state.searchText)
    // fetch data again with a new request
  }

  // Handle click of the button
  handleClick = () => {
    console.log("clicked on button");
    this.setState((prevState) => { return { counter: prevState.counter + 1 } });
  }

  // Handle text change in input
  handleChange = (e) => {
    console.log("event change ", e.target.value)
    this.setState({ searchText: e.target.value })
  }

  // Renders the component
  render() {
    console.log("App - render")
    let { users } = this.state;

    // filtering users based on search text change
    let filteredUsers = users.filter(user => user.name.toLowerCase().includes(this.state.searchText.toLocaleLowerCase()))

    return (
      // React.createElement("h1",'Hello Students', [React.createElemt("p","...")])
      // Fragments
      <>
        <h1>Hello Students!!!</h1>
        <p>Registered Students: <mark>{this.state.counter}</mark></p>
        <button onClick={this.handleClick}>Add Student</button>
        <input type="text" onChange={this.handleChange} />
        <UserList userProps={filteredUsers} counter={users.length} />
      </>
    );
  }
}

export default App;