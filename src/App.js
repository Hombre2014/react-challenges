import './App.css';
import IncrementWith from './IncrementWith';
import Users from './Users';
import ToggleBlock from './ToggleBlock';
import DataBinding from './DataBinding';
import DisabledButton from './DisabledButton';
import ChildParent from './ChildParent';

const App = () => {
  return (
    <div className="App">
      <h1 className='title'>React challenges</h1>
      <IncrementWith />
      <Users />
      <ToggleBlock />
      <DataBinding />
      <DisabledButton />
      <ChildParent />
    </div>
  );
}

export default App;
