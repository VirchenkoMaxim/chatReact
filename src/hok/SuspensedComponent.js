import React from "react";

export let SuspensedComponent = (Component) => {
    return (
        < React.Suspense fallback={< div > Загрузка...</div >}> <Component /></React.Suspense>
    )
}