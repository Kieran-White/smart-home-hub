import './App.css';
import React, { useState } from 'react';
import PageLayout from "./components/PageLayout";
import HomeDashboard from "./components/HomeDashboard";
import TempControls from "./components/TempControls"

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <PageLayout
      page={<HomeDashboard/>}
      />
    </div>
  );
}

export default App;
