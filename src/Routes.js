import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom' 
import AddTopics from './components/AddTopics/AddTopics';
import HomePage from './components/HomePage/HomePage';
import Header from './components/Header/Header'
import TopicDetails from './components/TopicDetails/TopicDetails';
import EditTopics from './components/EditTopics/EditTopics';

const Routes = () => {
    return (
        <BrowserRouter>
        <Header/>
         <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/add" component={AddTopics}/>
            <Route exact path="/details/:id" component={TopicDetails}/>
            <Route exact path="/edit/:id" component={EditTopics}/>
        </Switch>   
        </BrowserRouter>
    );
};

export default Routes;