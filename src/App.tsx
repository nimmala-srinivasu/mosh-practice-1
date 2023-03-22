import Button from './components/Button'

function App() {

  return (
    <div className="App">
      <Button color='danger' onClick={()=>console.log("clicked")}>Start</Button>
    </div>
  )
}

export default App
