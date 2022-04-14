import { useState } from 'react';
import './App.css';
import ListKontak from './components/ListKontak';

function App() {
  const[ nama, setName] = useState('Abu')
  return (
    <div className="App">
      <h2>Aplikasi Kontak App</h2>
      <ListKontak nama={nama}/>
    </div>
  );
}

export default App;
