
import React, { Component } from 'react'
import { TOP_HEADLINES_URL } from '../../Environnement/environnement';
import { NEWS_KEY } from '../../Config/config';
import axios from 'axios';
import ArticlesList from './ArticlesList';
import { removeDuplicates } from '../FilterDuplicates'

export default class TopHeadlines extends Component {

    constructor() {
        super()
        this.state = {
            top_articles: [],
            errors: null
        };
    }

    getTopArticles = () => {
        // Make HTTP reques with Axios
        axios.get(`${TOP_HEADLINES_URL}` + `${NEWS_KEY}`).then(res => {
            // Set state with result
            console.log("Top_articles from  App :", res.data.articles)
            this.setState({ top_articles: removeDuplicates(res.data.articles, 'title') })
        }).catch(error => {
            console.log("error from getTopArticles :", error)
            this.setState({ errors: error })
        });
    };

    componentDidMount() {
        this.getTopArticles();
    }

    render() {
        const { top_articles, errors } = this.state;
        return (
            <div className="row mt-5">
                { errors && top_articles.length == 0 ?
                    <div className="alert alert-danger">
                        <h2 className="text-center">
                            Error ! No Data To Show
            </h2>
                    </div>
                    :
                    <ArticlesList
                        articles={top_articles} />
                }

            </div>
        )
    }
}

