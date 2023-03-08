import { useState } from 'react';
import './App.css';
import AddList from './components/AddList';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '열무김치 사기',
      status: 'active',
    },
    {
      id: 2,
      text: '투두앱 만들기',
      status: 'active',
    },
    {
      id: 3,
      text: '지평행정사 사이트 리뉴얼 하기',
      status: 'active',
    },
  ]);
  //handleAdd 함수는 prop으로 넘겨준 ondAdd 함수가 호출되면 호출되는 콜백함수임 prop으로 넘겨준 onAdd 함수는 AddList.jsx의 handleOnSubmit으로부터 사용자의 데이터를 받아서 todos에 넣어줌
  const handleAdd = (list) => setTodos([...todos, list]);

  return (
    <div className='mt-8'>
      <h1 className='text-2xl font-bold text-center'>지운이의 TodoApp</h1>
      <AddList onAdd={handleAdd} />
      <ul className='mt-6'>
        {todos.map((item) => (
          <li className='p-3' key={item.id}>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
