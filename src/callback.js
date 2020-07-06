import React from "react";

import FlexWrapped from "./components/FlexWrapped";

import { withAuth } from "./Auth/index";

class Callback extends React.Component {
  componentDidMount() {
    const { handleAuthentication } = this.props;
    if (handleAuthentication) {
      handleAuthentication();
    }
  }

  render() {
    return (
      <FlexWrapped>
        <h1>CALLBACK </h1>
      </FlexWrapped>
    );
  }
}

export default withAuth(Callback);
