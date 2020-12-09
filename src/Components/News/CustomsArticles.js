
import React, { Component } from 'react'
import { EVERYTHING_BY_KEYWORD_URL, EVERYTHING_URL, TOP_HEADLINES_URL } from '../../Environnement/environnement';
import { NEWS_KEY } from '../../Config/config';
import axios from 'axios';
import { removeDuplicates } from '../FilterDuplicates'
import ArticlesList from './ArticlesList';
import { getUserFromStorage } from '../../Services/UserService'

export default class CustomsArticles extends Component {

    constructor() {
        super()
        this.state = {
            custom_articles: [],
            errors: null,
            keyword: ''
        };

    }

    getCustomsArticles = (keyword) => {
        console.log("keyword: ", keyword)
        // Make HTTP reques with Axios
        axios.get(`${EVERYTHING_BY_KEYWORD_URL}` + `${keyword}` + `&apikey=` + `${NEWS_KEY}`).then(res => {
            // Set state with result
            console.log("Top_articles from  App :", res.data.articles)
            this.setState({ custom_articles: removeDuplicates(res.data.articles, 'title') })
        }).catch(error => {
            console.log("error from getTopArticles :", error)
            this.setState({ errors: error })
        });
    };

    componentDidMount() {
        const user = getUserFromStorage();
        if (user) {
            this.setState({
                keyword: user.keyword,
            })
            this.getCustomsArticles(user.keyword);
        } else {
            console.log("can't access to user ");
        }

    }

    render() {
        const { custom_articles, errors } = this.state;
        return (
            <div className="row mt-5">
                {errors && custom_articles.length == 0 ?
                    <div className="alert alert-danger">
                        <h2 className="text-center">
                            Error ! No Data To Show
                        </h2>
                        <hr />
                        {errors}
                    </div>
                    :
                    <ArticlesList
                        articles={custom_articles}
                    />
                }
            </div>
        )
    }
}

