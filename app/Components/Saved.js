import React from 'react'

import helpers from './Utility/helper'

class Saved extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            saved: ""
        }
    }

    componentDidMount() {
        helpers.getSaved()
            .then(function (data) {
                this.setState({
                    saved: data.data
                });
                console.log('saved results', data.data)
            }.bind(this))
    }

    handleClick(article, e) {
        e.preventDefault();
        helpers.deleteSaved(article.title, article.paragraph, article.date, article.url)
            .then(function (data) {
                console.log('component did mount here');
            }.bind(this))
    }

    render() {
        console.log(this.state, 'before if');
        if (this.state.saved == "") {
            return (
                <li className="list-group-item">
                    <h3><span><em>Save your first article ...</em></span></h3>
                </li>
            )
        } else {
            console.log(this.state, 'in else');
            var articles = this.state.saved.map(function (article, index) {
                return (
                    <div key={index}>
                        <li className="list-group-item">
                            <h3>
                                <span><em>{article.title}</em></span>
                            </h3>
                            <div className="row">
                                <div className="col-xs-8">
                                    <span>{article.paragraph}</span>
                                </div>
                                <div className="col-xs-4">
                                    <div className="row">
                                        <a href={article.web_url} target="_blank" className="btn">View Article</a>
                                    </div>
                                    <div className="row">
                                        <button className="btn" onClick={this.handleClick.bind(this, article)}>Delete
                                        </button>

                                    </div>
                                </div>
                            </div>

                            <p>Date Published: {article.pub_date}</p>
                        </li>
                    </div>
                )
            }.bind(this))
        }
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title text-center">Saved</h3>
                </div>
                <div className="panel-body text-center">
                    <ul className="list-group">
                        {articles}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Saved;