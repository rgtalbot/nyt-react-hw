import React from 'react'

import Query from './Search/Query'
import Results from './Search/Results'
import helpers from './Utility/helper'

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
        if (this.state.topic != "" && (prevState.topic != this.state.topic || prevState.start != this.state.start || prevState.end != this.state.end)) {
            helpers.runQuery(this.state.topic, this.state.start, this.state.end)
                .then(function(data) {
                    if (data != this.state.results) {
                        this.setState({results: data})
                    }
                }.bind(this))
        }
    }

    setSearch(newTopic, newStart, newEnd) {
        this.setState({
            topic: newTopic,
            start: newStart,
            end: newEnd
        });
    }

    render() {
        return (
            <div>
                <Query update={this.setSearch} />

                <Results results={this.state.results} />
            </div>
        )
    }
}

export default Search;