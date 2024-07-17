import './App.css'
import Greeting from './Greeting';
import Profile from './Profile';
import contacts from './contacts';

function App(){
  
  function handleCancel(){
    console.log("Clicked Cancel button")
  }

  function handleSave(message){
    console.log(message)
  }
  {console.log(contacts)}
  return(
    <div>
      <h1 className="heading">Welcome to React Session!</h1>
      <button onClick={()=>handleSave("Saved succesfully")}>Save</button>
      <button onClick={handleCancel}>Cancel</button>
      <Greeting />
      {contacts.map((item)=>(

        <Profile key={item.id} contact={item}/>
      ) )}
    </div>
 
  )
}
export default App;