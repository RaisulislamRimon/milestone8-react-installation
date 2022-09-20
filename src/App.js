import logo from './logo.svg';
import './App.css';

function App() {
  const url = `https://restcountries.com/v3.1/all`
  fetch(url)
  .then(response=>response.json())
  .then(data=>console.log(data))
  return (
    <div>

    </div>
  );
}

export default App;
