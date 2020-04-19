import React from 'react';
import './App.css';

import Navigation from '../components/Navigation';
import Jumbotron from '../components/Jumbotron';
import DirectoryTable from '../components/DirectoryTable';
import FootNav from '../components/FootNav';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      message: "Hello From State"
    };
  }


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
