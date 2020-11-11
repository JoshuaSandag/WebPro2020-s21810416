import './App.css';
import Card from './components/Card';
import {person} from "./utils/person";

function App() {
  return (
    <>
    <h1>Pertemuan 21 belajar tentang props</h1>
      {person.map((item) => {
        return(
          <Card 
            name={item.name}
            institution={item.institution}
            address={item.address}
            phoneNumber={item.phoneNumber} 
            />         
            );
        })}
    </>
  );
}
export default App; 