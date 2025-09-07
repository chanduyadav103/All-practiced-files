import logo from './logo.svg';
import './App.css';

function Card(props) {
  const { message, color, width, height } = props;
  return (
    <div className={`card ${color}`} style={{ width, height }}>
      <h1>{message}</h1>
    </div>
  );
}

function App() {
  return (
    <div className="d-flex">
      <Card message="Hello World!" color="orange" width="500px" />
      <Card message="Chandu Yadav" color="blueviolet" width="250px" height="500px" />
    </div>
  );
}

export default App;
