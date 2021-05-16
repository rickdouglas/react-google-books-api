import React, { useState } from 'react';
import './App.css';

function App() {
  const [busca, setBusca] = useState('');
  const onInputChange = (e) => {
    setBusca(e.target.value)
  }
  return (
    <div className="App">
      <section>
      <form>
        <label>
          <span>Google Books API</span>
          <input
            type="search"
            placeholder="Pesquisar por :"
          />
          <button type="submit">Search</button>
        </label>
      </form>
    </section>
    </div>
  );
}

export default App;
