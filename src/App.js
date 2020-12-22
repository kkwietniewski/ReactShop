import  React, {useState}  from "react";
import Tweet from './Tweet';

function App() {

  const [users, setUsers] = useState([
    {name: 'Kacper', message: 'Hello'},
    {name: 'John Snow', message: 'winter'},
    {name: 'Bran Stark', message: 'boringggg'}
  ]);

  return (
    <div className="app">
      {users.map(user =>(
        <Tweet name={user.name} message={user.message}/>
      ))}
    </div>
  );
}

export default App;