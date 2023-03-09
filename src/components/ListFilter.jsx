import React, { useState } from 'react';

export default function ListFilter() {
  const [filter, setFilter] = useState(['모두', '진행중', '완료']);
  return (
    <div>
      <ul className=''>
        {filter.map((fil, index) => (
          <li key={index}>
            <button>{fil}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
