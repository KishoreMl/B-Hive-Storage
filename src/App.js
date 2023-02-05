import './App.css';
import './hive.css';
import './cube.css';
import './design.css';
import cover from './bg4.png';

import HomePage from './Component/HomePage';
import IndexPage from './Component/Indexpage';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${cover})`}}>
      <HomePage/>
    </div>
  );
}

export default App;
