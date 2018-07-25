import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFoundPage from '../touch/NotFoundPage';
import Header from '../touch/Header';
import HomePage from '../touch/HomePage';
import ContactPage from '../touch/ContactPage';
import PortfolioItemPage from '../touch/PortfolioItemPage';
import PortfolioPage from '../touch/PortolioPage';

const Router = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/portfolio" component={PortfolioPage} exact={true} />
                <Route path="/portfolio/:id" component={PortfolioItemPage} />
                <Route path="/contact" component={ContactPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default Router;
