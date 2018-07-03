import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

import "./Landing.css";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4" id="richr-heading">RichR</h1>
                <p className="lead">
                  {" "}
                  At the end of this year, will you be richer?
                  <br />
                  Find out now...
                </p>
                <hr />
                <Link
                  className="get-richr btn btn-lg btn-info mr-2"
                  to="/login"
                >
                  Get RichR
                  {/* </a>
                {/* <a href="login.html" className="btn btn-lg btn-light">
                  Login */}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.PropTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
