import './App.css'
import Sidebar from './components/Sidebar/Sidebar.component';
import MainDash from './components/MainDash/MainDash.component';
import RightSide from './components/RightSide/RightSide.component';

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <MainDash />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
