import React from 'react';
import moment from 'moment';

import helpers from '../utils/helper'

class Results extends React.Component {

    handleClick(item) {
        helpers.postSaved(item.headline.main, item.lead_paragraph, item.pub_date, item.web_url)
            .then(function (data) {
                console.log('save successful');
            }.bind(this));
    }

    render() {
        if (!this.props.results.hasOwnProperty('docs')) {
            return (
                <li className="list-group-item">
                    <h3>Enter search terms to begin ...</h3>
                </li>
            )
        } else {
            var articles = this.props.results.docs.map(function (article, index) {
                var datePub = moment(article.pub_date).format('MMM Do, YYYY');
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
                                        <a href={article.web_url} target="_blank"><button className="btn btn-primary">View Article</button></a>
                                    </div>
                                    <div className="row">
                                        <button className="btn btn-default" onClick={this.handleClick.bind(this, article)}>Save</button>

                                        </div>
                                    </div>
                            </div>

                            <p>Date Published: {datePub}</p>
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