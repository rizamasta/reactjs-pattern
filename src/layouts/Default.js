import React from 'react';
import { Link, Switch } from "react-router-dom";
import { routes } from '../config/routes';
import { RouteWithSubRoutes } from '../config/RouteWithSubRoutes';
import logo from '../assets/images/logo.svg';

class Default extends React.Component {

    render() {
        // var className = this.state.className;
        return (
            <div>
                <header >
                    <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light border-bottom box-shadow">
                        <h5 className="my-0 mr-md-auto font-weight-normal"><img alt='test' src={logo} height='40px' /></h5>
                        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse bg-light collapse" id="navbarCollapse">
                            <ul className="navbar-nav mr-auto" data-toggle="collapse" data-target=".navbar-collapse.show" >
                                <li className="nav-item">
                                    <Link data-target="#navbarCollapse" className={this.props.location.pathname === '/' || this.props.location.pathname === '/home' ? "nav-link active" : "nav-link"} to="/home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={this.props.location.pathname === '/about' ? "nav-link active" : "nav-link"} to="/about" >About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={this.props.location.pathname === '/topics' ? "nav-link active" : "nav-link"} to="/topics">Topics {JSON.stringify(process.env.NODE_ENV)}</Link>
                                </li>
                            </ul>
                            <form className="form-inline p-2-r mt-md-0">
                                <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                            <Link className="btn btn-outline-primary" to="/signin">Sign in</Link>
                        </div>
                    </nav>
                </header>
                <main role='main'>
                    <div data-toggle="collapse" data-target=".navbar-collapse.show" >
                        <Switch>
                            {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
                        </Switch>
                    </div>
                </main>
            </div >
        )
    }
}
export default Default;