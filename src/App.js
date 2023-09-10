
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TaskForm from './components/TaskForm';
import TasksList from './components/TasksList'

import { useSelector } from 'react-redux';
function App() {

   return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<TasksList />} />
        <Route path='/create-task' element={<TaskForm/>} />
        <Route path='/edit-task/:id' element={<TaskForm/>} /> 
      </Routes>
      </BrowserRouter>
      
      
   
   
    </div>
  );
}

export default App;
