import React from 'react'
import Layout from '../Components/Layout/Layout'
import ArticleDetail from '../Components/News/ArticleDetail'

const ArticleDetailPage = (props) => {
    const articleObject = JSON.parse(props.location.myArticle);
    return (
        <Layout>
             <ArticleDetail articleObject={articleObject} /> 
        </Layout>
    )
}

export default ArticleDetailPage
