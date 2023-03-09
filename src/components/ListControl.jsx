import React, { useState } from 'react';
import { RiDeleteBackLine } from 'react-icons/ri';
import { BsPencilSquare } from 'react-icons/bs';

export default function ListControl({ todo, onUpdate, onDelete }) {
  const [checked, setChecked] = useState(true);
  const handleOnDelete = () => {
    onDelete(todo);
  };
  const handleOnUpdate = () => {};
  const handleChecked = (e) => {
    // checked가 되면 completed가, checked가 아니면 active가 나와야함
    // checked => true, 아니면 false
    // useState로 상태를 변경해야겠쥬?
    // setChecked()
    setChecked(!checked);
  };
  return (
    <div className=''>
      <li className='p-3'>
        <input type='checkbox' id='checkbox' onChange={handleChecked} />
        <label htmlFor='checkbox'>{todo.text}</label>
        {checked === true ? '진행중이어요' : '완료해부러쓰'}
        {/* <button onClick={handleOnUpdate}>
          <BsPencilSquare />
        </button> */}
        <button onClick={handleOnDelete}>
          <RiDeleteBackLine className='w-6 mr-0' />
        </button>
      </li>
    </div>
  );
}
