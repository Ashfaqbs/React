import { useState, useEffect } from 'react'

import './App.css'
import JsonFormatter from './components/JsonFormatter'
import Header from './components/Header';
import Footer from './components/Footer ';
function App() {

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = '';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);



  return (
    <>
      {/* <Header /> */}
      <JsonFormatter />
      <Footer />
    </>
  )
}

export default App
