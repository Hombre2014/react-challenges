import './App.css';
import IncrementWith from './IncrementWith';
import Users from './Users';
import ToggleBlock from './ToggleBlock';
import DataBinding from './DataBinding';

const App = () => {
  return (
    <div className="App">
      <h1 className='title'>React challenges</h1>
      <IncrementWith />
      <Users />
      <ToggleBlock />
      <DataBinding />
    </div>
  );
}

export default App;
