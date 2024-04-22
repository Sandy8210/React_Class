import React, { Component } from "react";

export default class ErrorBoundry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }
  render() {
    if (this.state.hasError) {
      return <h2>Your Code 404 Error ...</h2>;
    } else {
      return <h3> {this.props.children} </h3>;
    }
  }
}
