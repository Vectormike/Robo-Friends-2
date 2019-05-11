import React, {Component} from 'react';
import { connect } from 'react-redux';
 import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import { setSearchField } from '../actions';



const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField
    }
}

class App extends Component {
    constructor() {
        super()

        this.state = {
            robots: [],
            searchField: ''
        }
    } 
    
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')

        .then(response => response.json())  
        .then((users) => {
            this.setState({robots:users})
        })
    }


    onSearchChange = (event) => {
        this.setState({searchField: event.target.value}) 
    }
 
    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField) 
        })
        
        return (
             
            <div className="tc">
                <h1 className="f1 pa">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots ={filteredRobots}/>
                </Scroll>
            </div>
        );
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(App);