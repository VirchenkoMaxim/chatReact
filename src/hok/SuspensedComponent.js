import React from "react";
import Preloader from "../components/common/Preloader";

export let SuspensedComponent = (Component) => {
    return (
        < React.Suspense fallback={<Preloader />}> <Component /></React.Suspense>
    )
}