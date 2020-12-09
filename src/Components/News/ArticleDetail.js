import { React } from 'react'

const ArticleDetail = (props) => {
    console.log("article from detail ", props.articleObject);
    function getDateFormat(dt) {
        return (new Date(dt)).toLocaleDateString("en-US");
    }

    return (
        <div className="container">
            <div className="card mt-3 col-sm-8">
                <div className="card-header bg-white" >
                    <small className="text-dark float-left"> <b>by ,</b>{props.articleObject.author}</small>
                    <small className="text-dark float-right"> {getDateFormat(props.articleObject.publishedAt)}</small>
                </div>
                <img className="card-img-top" src={props.articleObject.urlToImage} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{props.articleObject.title}</h5>
                    <p className="card-text">{props.articleObject.description}</p>
                    <p className="card-text">{props.articleObject.content}
                    </p>
                    <a className="btn btn-outline-danger float-right" href={props.articleObject.url} target="_blank">
                        See Original Article
                    </a>
                </div>
            </div>
        </div>

    )
}

export default ArticleDetail
