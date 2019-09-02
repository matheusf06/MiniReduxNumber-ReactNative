import React from 'react';
import Home from './Components/Home.js';


import { Provider } from 'react-redux';
import store from './Components/store';

const App = () => {
   
  return (
  	<Provider store={store}>
  		<Home/>
  	</Provider>
  );
};

export default App;
