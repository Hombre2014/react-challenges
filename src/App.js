import './App.css';
import IncrementWith from './IncrementWith';
import Users from './Users';
import ToggleBlock from './ToggleBlock';
import DataBinding from './DataBinding';
import DisabledButton from './DisabledButton';
import ChildParent from './ChildParent';
import ParentChildren from './ParentChildren';
import Child from './Child';
import AddTwoNumbers from './AddTwoNumbers';
import FetchUserData from './FetchUserData';

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
      <ParentChildren>
        <Child />
      </ParentChildren>
      <AddTwoNumbers />
      <FetchUserData />
    </div>
  );
}

export default App;
