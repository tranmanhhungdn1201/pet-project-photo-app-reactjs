import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch, Link } from 'react-router-dom';
import NotFound from './components/NotFound';
import './App.css';
import Header from './components/Header';
import productApi from 'api/productApi';

// Lazy load - Code splitting
const Photo = React.lazy(() => import('./features/Photo'));

function App() {
  const [ productList, setProductList ] = useState([]);
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const params = {
           _page: 1,
           _limit: 10
        }
        const response = await productApi.getAll(params);
        console.log(response);
      } catch (error) {
        console.log('Fail to fetch product list: ', error);
      }
    }

    fetchProductList();
  }, []);

  return (
    <div className="App">
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
        <Header/>
          <Switch>
            <Redirect exact from="/" to ="/photos" />
            <Route path="/photos" component={Photo} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
