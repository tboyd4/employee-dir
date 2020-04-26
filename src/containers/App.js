import React from 'react';
import './App.css';

import Navigation from '../components/Navigation';
import Jumbotron from '../components/Jumbotron';
import DirectoryTable from '../components/DirectoryTable';
import FootNav from '../components/FootNav';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Jumbotron />
        <DirectoryTable />
        <FootNav />
      </div>
    );
  }
}

export default App;
