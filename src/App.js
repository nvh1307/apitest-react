import {useState,useEffect} from 'react'
import Form from './Form'
import List from './List'

function App(){
  const URLapi = 'https://jsonplaceholder.typicode.com/'
  const [reqType, setReqType] = useState('users')
  const [items,setItems] = useState([])
  
  useEffect(()=>{

    const fetchApi = async ()=>{
      try{
        const response = await fetch (`${URLapi}${reqType}`)

        const data = await response.json()
        setItems(data)
      }catch(err){
        console.log(err)
      }

    }

    fetchApi()
  },[reqType])

  return(
    <div className="class">
      <Form 
        reqType = {reqType}
        setReqType = {setReqType}
      />
      <List 
        items={items}
      />
    
    </div>
  )
}

export default App