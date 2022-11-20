import './App.css';
import {Card} from './card/Card';
import {useState} from 'react';
import {Thanks} from './thanks/Thanks';






function App() {  
  const [show, setShow]=useState(false)
    const [rate, setRate] = useState(0);


  
  function HandleSubmit() {
    if (rate !== 0 ) {
      setShow(true);
      
    }
  }

return ( 
  
<div className="App"> 

 {show===false && <Card  rate={rate}  setRate={setRate} HandleSubmit={HandleSubmit}/>}
 {show===true && <Thanks  rate={rate} setRate={setRate} /> }

</div>
  )
}
export default App;
