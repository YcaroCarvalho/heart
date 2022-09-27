import './App.css'
import Form from './components/Form/Form'


function App() {

  const [ logged , setLogged] = useState(null);
  
  return (
    <div className="App">
      <h1>♥</h1>
      <Form />
    </div>
  )
}

export default App
