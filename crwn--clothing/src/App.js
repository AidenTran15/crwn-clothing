import React from 'react';
import { Route } from 'react-router-dom';
import "./App.css";


const HomePage = props => {
  return(
    <div>
      <button onClick={() => props.history.push('/topics')}>Topics</button>
      <h1>Home Page</h1>
    </div>
  );
};

const TopicsList = () => {
  return(
    <div>
      <h1>Topic List Page</h1>
    </div>
  );
};

const TopicDetail = () => {
  return(
    <div>
      <h1>Topic Detail Page</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/topics' component={TopicsList}/>
      <Route path='/topics/:topicId' component={TopicDetail}/>
    </div>
  );
}

export default App;
