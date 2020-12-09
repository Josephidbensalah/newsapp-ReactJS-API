import React from 'react'
import { Link } from 'react-router-dom'
const Article = (props) => {
    function getDateFormat(dt) {
        return (new Date(dt)).toLocaleDateString("en-US");
    }

    return (
        <div className="card mt-3 col-md-4 ml-2" key={props.article.title}>
            <div className="card-header">
                <div className="text-muted float-right"> On {getDateFormat(props.article.publishedAt)} </div>
            </div>
            <img src={props.article.urlToImage} className="card-img-top" />
            <div className="card-body">
                <div className="card-title">
                    {props.article.title}
                </div>
            </div>
            <div className="card-footer bg-white">
                <Link to={{
                    pathname: `/article/` + `${props.article.author}`,
                    myArticle: JSON.stringify(props.article)
                }}
                    className="btn btn-warning" >
                    Read more
                </Link>
            </div>
        </div>
    )
}

export default Article
