// import './App.css';
import './Style.css'; 
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Card from "./Components/Card";
import ali from './Images/ali.png';
import alice from './Images/alice.png';
import model from './Images/model .png';
import interstar from './Images/interstar.png'; 
// import Todo from './Components/Todo';  

function App() {
  return (
  <div className= "container"> 
     <Navbar /> */
     <Main />
     <Card 
       img=  {ali}
       name= "Ike"
       life = "life lessons with Ike"
     />
     <Card
     img= {model} 
     name= "Iyke"
     life = "life lessons with Iyke"
     />
     <Card
     img= {alice}  
     name= "Iye"
     life = "life lessons with Iye"
     />
     <Card
     img= {interstar}
     name= "Iyo"
     life = "life lessons with Iyo" 
     />
     {/* <Todo />  */}
    </div>
  );
} 



export default App; 
