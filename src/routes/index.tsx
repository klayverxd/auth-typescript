import { Route, Switch } from "react-router";

import SignIn from "../pages/SignIn";

export default function Routes() {
    return (
        <Switch>
            <Route exact path='/login' component={SignIn} />
        </Switch>
    )
}