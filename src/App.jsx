import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from "./components/NavBar"
import ChatBar from './components/ChatBar';
import './App.css'


function App() {
  
  return <>
    <NavBar/>
    <ChatBar/>
  </>
}

export default App
