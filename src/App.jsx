import React from 'react';
import Navbar from './components/Navbar';
import TaskList from './components/TaskList';

function App() {
  return (
    <>
    <header>
      <div>
        <Navbar />
      </div>    
    </header>
    <main>
      <h2>Hola</h2>
      <TaskList />
    </main>
    
    </>
  );
}

export default App;
