import {Route, Routes} from 'react-router-dom'
import 'tailwindcss/tailwind.css';
import TaskList from './components/Tasklist';
import AddTask from './components/AddTask';


function App() {
  return (
    <div>
      <Routes>
          <Route path='/' element={<TaskList />}/>
              <Route path='/create' element={<AddTask />}/>
              <Route path='/edit/:id' element={<AddTask />}/>
      </Routes>
   
    </div>
    
  )
}


export default App
