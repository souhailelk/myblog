import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ArticleComponent from './components/Article'
import HomeComponent from './components/Home'
import Page404Component from './components/Page404'
import NavigationBarComponent from './components/NavigationBar'
import ResumeComponent from './components/Resume'
import Article from './models/Article'
import Resume from './models/Resume'
import Experience from './models/Experience'
import Project from './models/Project'
import Education from './models/Education'
import NavigationBarItem from './models/NavigationBarItem'
import ArticlesComponent from './components/Articles'



function GetArticle(id) {
  const content = <p>{id}From Elecrow. I have two of their first CrowPi device and I use them in demonstrations and talks all the time, especially when talking to students.
  They have a Kickstarter ending this week for the new CrowPi2. It's an update of the original CrowPi which was basically a Raspberry Pi in a tiny suitcase...instead the CrowPi2 looks like a laptop! The magical part is that the full exploration and sensor board is hidden underneath a wireless keyboard with trackpad, held on with magnets!
  The CrowPi folks sent me an early CrowPi2 because I was a vocal supporter of the previous version, so I did a LIVE video unboxing on twitter as well as a follow up software video on the CrowPi2. I am not being paid for this review and I always am honest with y'all about the stuff I like. I plan on buying a few for my kids' public school science class.</p>
  const title = "Reviewing the Elecrow CrowPi2 Raspberry Pi Laptop and STEM Education Platform"
  const date = "20/08/2020"
  const tags = ["photography", "other", "other", "other", "other"]
  return new Article(id, title, content, date, tags)
}

function GetResume() {
  const description = "I'm a software engineer, living in Rabat, Morocco.";
  var experience = new Experience("société générale africa technologies & services",
    "http://africa-technologies-services.sgcib.com/",
    "Software Engineer",
    "Belong to Infra team",
    "04/02/2019",
    "Now");
  var education = new Education("Université Hassan II Mohammedia",
    "https://www.fstm.ac.ma/",
    "Software engineering",
    "Description",
    "04/09/2016",
    "06/06/2019");
  var project = new Project("Sudoku-SWAT",
    "#",
    "The purpose behind this project was to approach NP problems and try to implement solutions that have lower complexity. We choosed as a problem a sudoku grid generator, in the length 3x3, 6x6, 9x9 and 16x16.",
    "06/01/2016",
    "06/06/2016")
  const experiences = [experience, experience]
  const projects = [project, project]
  const educations = [education, education]
  return new Resume("ELKAISSI SOUHAIL", description, projects, experiences, educations);
}

function App() {
  const navigationBarItems =
    [
      new NavigationBarItem("Home", "/"),
      new NavigationBarItem("Resume", "/Resume"),
      new NavigationBarItem("Articles", "/Articles"),
    ]
    const articles = []
    for (let index = 0; index < 3; index++) {
      articles.push(GetArticle(index));
      
    }
  let ArticlesRoutes = []
  articles.forEach(article => ArticlesRoutes.push(
    <Route path={"/Article/" + article.id}>
      <ArticleComponent article={article} />
    </Route>
  ))
  return (<div class="h-screen w-sceen">
    <NavigationBarComponent navigationBarItems={navigationBarItems} />
    <Router>
      <Switch>
        {ArticlesRoutes}
        <Route path="/Resume">
          <ResumeComponent resume={GetResume()} />
        </Route>
        <Route path="/Articles">
        <ArticlesComponent articles={articles} />
        </Route>
        <Route path="/" exact component={HomeComponent} />
        <Route component={Page404Component} />
      </Switch>
    </Router>
  </div>
  );
}

export default App;
