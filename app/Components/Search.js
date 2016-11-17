import React from 'react'

import SearchForm from './Search/SearchForm'
import Results from './Search/Results'
import helpers from './utils/helper'

class Search extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            topic: "",
            start: "",
            end: "",
            results: {}
        };
        this.setSearch = this.setSearch.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('component did update');
        console.log('this.state', this.state);
        console.log('prevState', prevState);
        if (this.state.topic != "" && (prevState.topic != this.state.topic || prevState.start != this.state.start || prevState.end != this.state.end)) {
            console.log('runQuery');
            helpers.runQuery(this.state.topic, this.state.start, this.state.end)
                .then(function(data) {
                    if (data != this.state.results) {
                        this.setState({results: data})
                    }
                }.bind(this))
        }
    }

    setSearch(newTopic, newStart, newEnd) {
        console.log('set search');
        this.setState({
            topic: newTopic,
            start: newStart,
            end: newEnd
        });
        console.log('state set');
    }

    render() {
        return (
            <div>
                <SearchForm update={this.setSearch} />

                <Results results={this.state.results} />
            </div>
        )
    }
}

export default Search;