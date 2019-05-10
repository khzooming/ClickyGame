import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import logo from './logo.svg'
// import About from "./components/pages/About";
// import Discover from "./components/pages/Discover";
// import Search from "./components/pages/Search";
// import NavTabs from "./components/NavTabs";


class App extends React.Component {
    state = {
        images: ["clicked", "not clicked"]
    }

    addFriend = (friend) => {
        // make a copy of the friends array that can be modifid directly
        let friends = [...this.state.friends];
        friends.push(friend);
        this.setState({ friends }, () => {
            // to see the changes in this.state, we have to use the callback function built in to this.setState 
            console.log(this.state.friends);
        });
    }


    render() {
        let randomFriend = this.state.friends[Math.floor(Math.random() * this.state.friends.length)];
        return (
            <Router>

                <div className="App">
                    {/* <NavTabs /> */}
                    {/* all comopnents have friends passed down from App */}
                    {/* <Route exact path="/" component={About} friends={this.state.friends} />
                    <Route exact path="/about" component={About} friends={this.state.friends} />
                    <Route exact path="/discover" render={(props) => <Discover addFriend={this.addFriend} friends={this.state.friends} {...props} randomFriend={randomFriend} />} />
                    <Route exact path="/search" component={Search} friends={this.state.friends} /> */}


                    {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
          </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
          </a>
          </header> */}
                </div>
            </Router>
        );
    }

}

export default App;
