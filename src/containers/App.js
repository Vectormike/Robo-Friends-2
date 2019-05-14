import React, {Component} from 'react';
import { connect } from 'react-redux';
 import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import { setSearchField, requestRobots } from '../actions';



const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}
class App extends Component {
    
    componentDidMount() {
        this.props.onRequestRobots()
    }



    render() {
        const {searchField, onSearchChange, robots, isPending} = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField) 
        }) 
        
        return isPending ? 
        <div className="tc">
                <h1 className="f1 pa">RoboFriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <h1 className="tc pa3">Loading</h1> 
        </div> :
        (
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