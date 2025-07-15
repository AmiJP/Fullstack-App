import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/hello')
      .then(res => res.text())
      .then(setMessage);
  }, []);

  return <div>{message}</div>;
}

export default App;
