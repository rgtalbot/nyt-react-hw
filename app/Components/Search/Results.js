import React from 'react';

import helpers from '../utils/helper'

class Results extends React.Component {

    handleClick(item, event) {
        helpers.postSaved(item.headline.main, item.lead_paragraph, item.pub_date, item.web_url)
            .then(function (data) {
            }.bind(this));
    }

    render() {
        if (!this.props.results.hasOwnProperty('docs')) {
            return (
                <li className="list-group-item">
                    <h3>
                        <span><em>Enter search terms to begin ...</em></span>
                    </h3>
                </li>
            )
        } else {
            var articles = this.props.results.docs.map(function (article, index) {
                return (
                    <div key={index}>
                        <li className="list-group-item">
                            <h3>
                                <span><em>{article.headline.main}</em></span>
                            </h3>
                            <div className="row">
                                <div className="col-xs-8">
                                    <span>{article.lead_paragraph}</span>
                                </div>
                                <div className="col-xs-4">
                                    <div className="row">
                                        <a href={article.web_url} target="_blank" className="btn">View Article</a>
                                    </div>
                                    <div className="row">
                                        <button className="btn" onClick={this.handleClick.bind(this, article)}>Save</button>

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
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h1 className="panel-title">Results</h1>
                    </div>
                    <div className="panel-body">
                        <ul className="list-group">

                            {articles}
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}

export default Results;