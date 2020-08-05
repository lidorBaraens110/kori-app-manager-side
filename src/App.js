import React from 'react';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ItemList from './component/itemList';
import CreateItem from './component/createItem';
import NavBar from './component/navBar';
import EditItem from './component/editItem';
import { createStore } from 'redux';
import reducers from './reducers/index';
import { Provider } from 'react-redux';
import BuyTheLook from './component/buyTheLook';
import Home from './component/HomePage';
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });



function App() {

  return (
    <StylesProvider jss={jss}>
      <Provider store={createStore(reducers)}>
        <Router>
          <NavBar />
          <Route path="/" exact component={ItemList} />
          <Route path="/create" component={CreateItem} />
          <Route path="/edit" component={EditItem} />
          <Route path="/buythelook" component={BuyTheLook} />
        </Router>
      </Provider>
    </StylesProvider>
  );
}

export default App;
