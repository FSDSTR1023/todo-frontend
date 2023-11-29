import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import NewTask from './components/NewTask';
import AllTaskList from './components/TaskList';

function App() {
  return (
    <Router>
      <div>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/tasks" element={<AllTaskList />} />
            <Route path="/newtask" element={<NewTask />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
