import { useAuth } from "../contexts/auth";

import { Switch } from "react-router";

import CustomRoute from "./Route";

import SignIn from "../pages/SignIn";
import Dashboad from "../pages/Dashboard";

export default function Routes() {
    const { signed } = useAuth();

    return (
        <Switch>
            <CustomRoute exact path='/dashboard' component={Dashboad} isPrivate signed={signed} />
            <CustomRoute path='/' component={SignIn} isPrivate={false} signed={signed} />
        </Switch>
    )
}