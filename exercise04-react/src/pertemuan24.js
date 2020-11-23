import React, { Component, useEffect, useState } from 'react';
import Card from "./components/Card";
import "./App.css";
import axios from "axios"

//menggunakan Class Component
// class App extends Component {

//   state = {
//     users: [],
//   };

//   componentDidMount () {
//     // fetch("https://jsonplaceholder.typicode.com/users") //Menggunakan Fetch
//     //   .then((response) => response.json())
//     //   .then((json) => this.setState({users: json}));
//     axios //Menggunakan Axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((response) => this.setState({users: response.data}));
//   }

//   render () {
//     return (
//       <>
//         {this.state.users.map((item)=>{
//           return (
//             <Card
//               name={item.name}
//               username={item.username}
//               website={item.website}
//               phone={item.phone}
//             />
//           )
//         })}
//       </>
//     )
//   }
// };

//2. Menggunakan Function Component
const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios  //Menggunakan Axios
     .get("https://jsonplaceholder.typicode.com/users")
     .then((response) => setUsers(response.data));
  }, [])

  return (
    <>
      {users.map((item) =>{
        return (
          <Card
            name={item.name}
            username={item.username}
            website={item.website}
            phone={item.phone} 
          />
        )
      })}
    </>
  );
};
export default App; 