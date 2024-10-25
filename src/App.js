// App.js
import React from 'react';
import Header from './components/header';
import Sidebar from './components/sidebar';
import MainContent from './components/mainContent';
import Footer from './components/footer';
import './App.css';

const App = () => (
  <div className="app">
  <div className="sidebar-container">
    <Sidebar />
  </div>
  <div className="main-layout">
    <Header />
    <MainContent />
    <Footer/>
  </div>
</div>
);

export default App;
