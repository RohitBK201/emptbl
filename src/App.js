import { useRef } from 'react';
import './App.css';
import { Form } from './component/form';
import { Table } from './component/table';

function App() {

  const ref = useRef(10)

  return (
    <div className="App">
      <Form/>
      <Table/>
    </div>
  );
}

export default App;
