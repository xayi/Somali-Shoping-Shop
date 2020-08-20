//somalia hanoolaatog

import React from 'react';
import './index.css'
import date from './date.json'
import Products from './components/Products';



class App extends React.Component{

  constructor() {
    super();
    this.state = {
      products: date.products,
      size: "",
      sort: "",
    };
  }

  render() {
  return (
    <div  className="grid-container">
      <header>
        <a href="/">Somali shoping cart</a>
      </header>
      <main>
      <div className="content">
      <div className="main">
        <Products products={this.state.products}></Products>
      </div>
      <div className="sidebar">
      curt 
      </div>

      </div>
      </main>
      <footer>
        all right reserved devloper by xayi garaad
      </footer>
    </div>

   
  );
  }
}

export default App;
