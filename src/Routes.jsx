import React from 'react'
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom'

import Home from './pages/Home';
import ArticleDetailPage from './pages/ArticleDetailPage'
import TopHeadlines from './pages/TopHeadlinesPage'
import CustomsArticles from './pages/CustomsArticlesPage'
import ProfilePage from './pages/ProfilePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ErrorPage404   from './pages/ErrorPage404'

const Routes = () => {
    return (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/customsArticles" component={CustomsArticles} />
            <Route path="/topHeadlines/" component={TopHeadlines} />
            <Route path="/article/:id" component={ArticleDetailPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/register" component={RegisterPage} />
            <Route component={ErrorPage404} />
        </Switch>
    </Router>
    
    )
}

export default Routes
