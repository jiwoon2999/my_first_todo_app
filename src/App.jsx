import { useState } from 'react';
import './App.css';
import AddList from './components/AddList';
import ListControl from './components/ListControl';
import ListFilter from './components/ListFilter';

function App() {
  const [todos, setTodos] = useState([
    {
      id: '1',
      text: '투두앱 만들기 with React',
      status: 'active',
    },
    {
      id: '2',
      text: '타입스크립트 공부하기',
      status: 'active',
    },
    {
      id: '3',
      text: '자바스크립트 복습하기',
      status: 'active',
    },
  ]);
  //handleAdd 함수는 prop으로 넘겨준 ondAdd 함수가 호출되면 호출되는 콜백함수임 prop으로 넘겨준 onAdd 함수는 AddList.jsx의 handleOnSubmit으로부터 사용자의 데이터를 받아서 todos에 넣어줌
  const handleAdd = (list) => setTodos([...todos, list]);
  const handleUpdate = (updated) => setTodos.map((t) => (t.id === updated.id ? updated : t));
  const handleDelete = (deleted) => setTodos(todos.filter((t) => t.id !== deleted.id));
  // onDelete가 호출되면 이 함수가 실행될 것이여

  return (
    <div className='m-auto mt-8 w-96'>
      <h1 className='text-2xl font-bold text-center'>지운이의 TodoApp</h1>
      <ListFilter />
      <AddList onAdd={handleAdd} />
      <ul className='mt-6'>
        {todos.map((item) => (
          <ListControl key={item.id} todo={item} onUpdate={handleUpdate} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
}

export default App;
