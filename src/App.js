import { Fragment } from 'react';
import Display from './components/display';
import Search from './components/search'
import SearchList from './components/search-list';
import './App.css';

function App() {
  return (
    <Fragment>
      <Display />
      <Search />
      <SearchList />
    </Fragment>
  );
}

export default App;
