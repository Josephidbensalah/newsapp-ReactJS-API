
import React, { Component } from 'react'
import { EVERYTHING_URL } from './Environnement/environnement';
import { NEWS_KEY } from './Config/config';
import axios from 'axios';
import ArticlesList from './Components/News/ArticlesList';
import { removeDuplicates } from './Components/FilterDuplicates'

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      articles: [],
      errors: null
    };

  }

  getArticles = () => {
    // Make HTTP reques with Axios
    axios.get(`${EVERYTHING_URL}` + `${NEWS_KEY}`).then(res => {
      // Set state with result
      console.log("articles from  App :", res.data.articles)
      this.setState({ articles: removeDuplicates(res.data.articles, 'title') })
      console.log("list length : ", this.state.articles.length)
    }).catch(error => {
      console.log("error from getArticles :", error)
      this.setState({ errors: error })
    });
  };

  componentDidMount() {
    this.getArticles();
  }

  render() {
    const { articles, errors } = this.state;
    return (
      <div className="row mt-5">
        { errors && articles.length == 0 ?
          <div className="alert alert-danger">
            <h2 className="text-center">
              Error ! No Data To Show
            </h2>
          </div>
          :
          <ArticlesList
            articles={articles} />
        }
      </div>

    )
  }
}

