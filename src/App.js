
import './App.css';
import Address from './component/Address';
import Fullname from './component/Fullname';
import Profilphoto from './component/Profilphoto';

function App() {
  return (
    <div className="App">
     <Fullname/>
     <Profilphoto/>
     <Address ></Address>
    </div>
  );
}

export default App;
