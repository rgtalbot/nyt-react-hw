import React from 'react'

class Query extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            topic: "",
            start: "",
            end: ""
        };
    }

    handleChange(name, event) {
        var change = {};
        change[name] = event.target.value;
        this.setState(change);
        console.log(this.state);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('submit');
        this.props.update(this.state.topic, this.state.start, this.state.end);

    }

    render() {
        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title text-center">Search</h3>
                </div>
                <div className="panel-body text-center">
                    <form>
                        <div className="form-group">
                            <label>Topic <input type="text" value={this.state.topic} onChange={this.handleChange.bind(this, 'topic')} className="form-control" name="topic" required/></label>
                        </div>
                        <div className="form-group">
                            <label>Start Year <input type="text" value={this.state.start} onChange={this.handleChange.bind(this, 'start')} className="form-control" name="start" required/></label>
                        </div>
                        <div className="form-group">
                            <label>End Year <input type="text" value={this.state.end} onChange={this.handleChange.bind(this, 'end')} className="form-control" name="end" required/></label>
                        </div>
                        <div>
                            <input type="submit" onClick={this.handleSubmit.bind(this)} value="Submit"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

export default Query