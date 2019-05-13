import React, {Component} from 'react';
import { connect } from 'react-redux';
 import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import { setSearchField } from '../actions';



const mapStateToProps = (state) => {
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}
class App extends Component {
    constructor() {
        super()

        this.state = {
            robots: []
        }
    } 
    
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')

        .then(response => response.json())  
        .then((users) => {
            this.setState({robots:users})
        })
    }



    render() {
        const {searchField, onSearchChange} = this.props;
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField) 
        }) 
        
        return (
            <div className="tc">
                <h1 className="f1 pa">RoboFriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <CardList robots ={filteredRobots}/>
                </Scroll>
            </div>
        );
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(App);