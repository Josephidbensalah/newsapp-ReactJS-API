import React from 'react'

const Page404 = (props) => {
    return (
        <div className="pt-5 mt-5 text-center">
            <h2>No match found for <code>{props.pathname}</code></h2>
        </div>
    )
}

export default Page404
