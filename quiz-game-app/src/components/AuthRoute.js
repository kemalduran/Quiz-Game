import React from 'react';
import { Redirect, Route } from "react-router";

export default class AuthRoute extends React.Component {

    render() {
        var user = sessionStorage.getItem("quizuser");

        const { type } = this.props;
        if (type === "guest" && user) return <Redirect to="/quiz" />;
        else if (type === "private" && !user) return <Redirect to="/" />;

        return <Route {...this.props} />;
    }

}