import React from 'react';

class Main extends React.Component {

    render() {
        return (
            <div>
                <div className="container">
                    <nav className="navbar navbar-default">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <a className="navbar-brand" href="#">NYT-React</a>
                            </div>
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="#/search">Search</a></li>
                                <li><a href="#/saved">Saved Articles</a></li>
                            </ul>
                        </div>
                    </nav>
                    <div className="jumbotron">
                        <h2 className="text-center">New York Times Article Scrubber</h2>
                        <h3 className="text-center">Search for and save articles of interest</h3>
                    </div>
                    {this.props.children}
                </div>
                <footer className="footer">
                    <div className="container text-center">
                        <div className="col-xs-4">
                            <p>Copyright &copy; 2016 Ryan Talbot</p>
                        </div>
                        <div className="col-xs-4">
                            <p>UCF Coding Boot Camp Week 19 Assignment</p>
                        </div>
                        <div className="col-xs-4">
                            <p><a href="https://github.com/rgtalbot/nyt-react-hw" target="_blank">GitHub Repo</a></p>
                        </div>
                    </div>
                </footer>
            </div>
        )

    }
}

export default Main;