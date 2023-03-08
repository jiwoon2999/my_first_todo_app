import React, { useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { v4 as uuidv4 } from 'uuid';

export default function AddList({ onAdd }) {
  // 사용자의 입력값을 저장하고, 변경해주는 text, setText useState 생성
  const [text, setText] = useState('');
  const handleOnchange = (e) => setText(e.target.value);
  const handleOnSubmit = (e) => {
    // handleOnSubmit 함수는 사용자가 입력한 text 값을 App.jsx의 todos 배열에 넣어준다.
    e.preventDefault();
    onAdd({ id: uuidv4(), text, status: 'active' });
    setText('');
  };
  return (
    <form className='flex items-center mt-9' onSubmit={handleOnSubmit}>
      <input className='w-full border-2' type='text' placeholder='할일을 입력하쇼' text={text} onChange={handleOnchange} />
      <button>
        <AiOutlinePlusCircle className='text-2xl w-14' />
      </button>
    </form>
  );
}
