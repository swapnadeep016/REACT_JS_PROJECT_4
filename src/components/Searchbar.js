import React ,{useState} from 'react'
import { Input } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

export default function Searchbar(props) {

const [state, setstate] = useState("");


let changeInputvalue=(event)=>{
  

    setstate(event.target.value);
  }

    return (
        <div>
            <Input focus placeholder='Search...' onChange={(event)=>changeInputvalue(event)} />

<Button basic color='teal' style={{marginLeft:30}} onClick={()=>props.getData(state)}>
    Search User
    </Button>
    
        </div>
    )
}
