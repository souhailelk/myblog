import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import HomeComponent from './components/Home'
import Page404Component from './components/Page404'
import NavigationBarComponent from './components/NavigationBar'
import ResumeComponent from './components/Resume'
import NavigationBarItem from './models/NavigationBarItem'
import ArticlesComponent from './components/Articles'
import ArticleComponent from './components/Article'

function App() {
  const navigationBarItems =
    [
      new NavigationBarItem("Home", "/"),
      new NavigationBarItem("Resume", "/Resume"),
      new NavigationBarItem("Articles", "/Articles"),
    ]
  return (<div className="h-screen w-sceen">
    <NavigationBarComponent navigationBarItems={navigationBarItems} />
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomeComponent} />
        <Route path="/Article/:id" component={ArticleComponent} />
        <Route path="/Resume" component={ResumeComponent}/>
        <Route path="/Articles" component={ArticlesComponent} />
        <Route component={Page404Component} />
      </Switch>
    </BrowserRouter>
  </div>
  );
}

export default App;
