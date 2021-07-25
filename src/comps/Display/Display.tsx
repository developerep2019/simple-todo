import React, { useEffect, useState } from 'react';
import db from '../../utilities/db';
import SingleDisplay from '../SingleDisplay/SingleDisplay';

const Display = () => {
  const [todoData, setodoData] = useState([]);
  useEffect(() => {
    const data = db().read();
    setodoData(data);
  }, []);
  todoData.sort((a, b) => {
    return a.id - b.id || a.title.localeCompare(b.title);
  });

  return (
    <div className="mt-3">
      {todoData.map((todo) => (
        <SingleDisplay todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default Display;
