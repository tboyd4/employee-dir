import React from 'react';
import './App.css';

import Navigation from '../components/Navigation';
import Jumbotron from '../components/Jumbotron';
import DirectoryTable from '../components/DirectoryTable';

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
      </div>
    );
  }
}

export default App;
