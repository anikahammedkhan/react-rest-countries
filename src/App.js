import logo from './logo.svg';
import './App.css';
import Countries from './component/Countries/Countries';

function App() {
  return (
    <div className="App">
      <div className="container py-5">
        <h1 className='text-warning py-4'>Rest Country Details Here</h1>
        <div>
          <Countries></Countries>
        </div>
      </div>
    </div>
  );
}

export default App;
