import React ,{useState} from 'react';

import './App.css';
import Profilecard from './components/Profilecard';
import { Container} from 'semantic-ui-react'
import Header from './components/Header';

import axios from 'axios';
import Searchbar from './components/Searchbar';
function App() {


  const [state, setstate] = useState({})

let getData=(username)=>{

axios.get(`https://api.github.com/users/${username}/repos`).then(data=>{



if(data.data[0])
{
  setstate(data.data[0]);
}


})


}




  return (
 
    <Container>



<Header/>


<Searchbar getData={getData} />

    <Profilecard style={{marginTop:30}} userdata={state}/>

    </Container>

   


     
  
  );
}

export default App;
