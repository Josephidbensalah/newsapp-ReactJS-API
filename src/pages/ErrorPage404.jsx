import React from 'react'
import Layout from '../Components/Layout/Layout'
import Page404 from '../ErrorHandling/Page404'

const ErrorPage404 = ({location}) => {
    return (
        <Layout>
            <Page404 pathname={location.pathname}/>
        </Layout>
    )
}

export default ErrorPage404
