import React from 'react'
import Article from './Article'
const ArticlesList = (props) => {
    function Random(author) {
        var maxNumber = 5000;
        var randomNumber = Math.floor((Math.random() * maxNumber) + 1);
        return author + '&randomId=' + randomNumber
    }
    return (
        <>
            {props.articles.map((article) => (
                <Article
                    key={Random(article.author)}
                    article={article}
                />
            ))}
        </>
    )
}

export default ArticlesList
