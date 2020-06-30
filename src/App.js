import React ,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Profilecard from './components/Profilecard';
import { Container} from 'semantic-ui-react'
import Header from './components/Header';
import { Input } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import axios from 'axios';
function App() {


  const [state, setstate] = useState({inputvalue:"" })

let getData=()=>{

axios.get(`https://api.github.com/users/${state.inputvalue}/repos`).then(data=>{
console.log(data.data);

})


}

let changeInputvalue=(event)=>{
  

  setstate({
    inputvalue:event.target.value
  })
}


  return (
 
    <Container>



<Header/>

<Input focus placeholder='Search...' onChange={(event)=>changeInputvalue(event)} />

<Button basic color='teal' style={{marginLeft:30}} onClick={getData}>
    Search User
    </Button>
    
    <Profilecard style={{marginTop:30}}/>

    </Container>

   


     
  
  );
}

export default App;
