import { useState } from 'react';
import './App.css';

function computeInitialCounter() {
  console.log('Some calculations...');
  return Math.trunc(Math.random() * 20);
}

function App() {
  const [counter, setCounter] = useState(() => {
    return computeInitialCounter();
  });

  function increment() {
    setCounter(prevCounter => {
      return prevCounter + 1;
    });
  }

  function decrement() {
    setCounter(prevCounter => {
      return prevCounter - 1;
    });
  }

  const [state, setState] = useState({
    title: 'Счетчик',
    date: Date.now(),
  });

  function updateTitle() {
    setState(prev => {
      return {
        ...prev,
        title: 'Новое название',
      };
    });
  }

  return (
    <div>
      <h1>Счетчик: {counter}</h1>
      <button onClick={increment} className="btn btn-success">
        Добавить
      </button>
      <button onClick={decrement} className="btn btn-danger">
        Убрать
      </button>
      <button onClick={updateTitle} className="btn btn-default">
        Изменить название
      </button>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default App;
