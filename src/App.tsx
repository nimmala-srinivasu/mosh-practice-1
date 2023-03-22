import Button from './components/Button'
import Alert from './components/Alert'
import { useState } from 'react'


function App() {
  const [alertVisible, setAlertVisible] = useState(false)

  return (
    <div className="App">
      {alertVisible && <Alert onClose={()=>setAlertVisible(false)}>warning</Alert>}
      <Button color='danger' onClick={()=>setAlertVisible(true)}>Start</Button>
    </div>
  )
}

export default App
