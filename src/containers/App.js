import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import Header from "../components/Header";
import { setSearchField, requestRobots } from "../actions";
import "./App.css";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     robots: []
  //     // searchfield: ""
  //   };
  // }

  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then(response => {
    //     return response.json();
    //   })
    //   .then(users => {
    //     this.setState({
    //       robots: users
    //     });
    //   });
    this.props.onRequestRobots();
  }

  // onSearchChange = e => {
  //   this.setState({
  //     searchfield: e.target.value
  //   });
  // };

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    if (isPending) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className="tc">
          <Header />
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  };
};

// connect considered high order function is a function which return another function
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
