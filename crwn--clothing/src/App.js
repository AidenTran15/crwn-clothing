import React from 'react';
import { Route, Switch } from 'react-router-dom';
import "./App.css";
import HomePage from './pages/homepage/homepage.jsx';
import ShopPage from './pages/shop/shop.jsx';


// const HomePage = props => {
//   return(
//     <div>
//       <button onClick={() => props.history.push('/topics')}>Topics</button>
//       <h1>Home Page</h1>
//     </div>
//   );
// };

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

// const HatsPage = () => {
//   return(
//     <div>
//       <h1>HATS PAGE</h1>
//     </div>
//   );
// };

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/topics' component={TopicsList}/>
      <Route path='/topics/:topicId' component={TopicDetail}/>
      <Route exact path='/shop' component={ShopPage}/>
    </Switch>
  );
}

export default App;
