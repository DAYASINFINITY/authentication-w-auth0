import React, { Component } from "react";

import { withRouter } from "react-router-dom";

import auth0 from "auth0-js";

const { Provider, Consumer: AuthConsumer } = React.createContext({
  isAuthorized: false
});

class AuthProvider extends Component {
  state = { isAuthorized: false };

  auth0 = new auth0.WebAuth({
    domain: "ramzes.us.auth0.com",
    clientID: "Xxd1fUpK5njokkZC7vcgBtJrejdx7ljQ",
    redirectUrl: "http://localhost:3000/callback",
    responseType: "token id_token",
    scope: "openid"
  });

  authorize = () => {
    this.auth0.authorize();
    // this.setState({ isAuthorized: true }, () => {
    //   this.props.history.push("/private");
    // });
  };

  handleAuthentication = () => {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken) {
        this.setState({ isAuthorized: true }, () => {
          this.props.history.push("/private");
        });
      } else if (err) {
        console.log(err);
      }
    });
  };
  render() {
    const { isAuthorized } = this.state;
    return (
      <Provider
        value={{
          isAuthorized,
          authorize: this.authorize,
          handleAuthentication: this.handleAuthentication
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export function withAuth(WrappedComponent) {
  return class AuthHOC extends Component {
    render() {
      return (
        <AuthConsumer>
          {contextProps => (
            <WrappedComponent {...contextProps} {...this.props} />
          )}
        </AuthConsumer>
      );
    }
  };
}

const AuthProviderWithRouter = withRouter(AuthProvider);

export { AuthProviderWithRouter as AuthProvider };
