import React from "react";
import {Switch, Route} from 'react-router-dom';

import "./App.css";

import ShopPage from "./page/shop/shop.component";
import Header from './components/header/header.component'
import HomePage from "./page/homepage/homepage.component";


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
