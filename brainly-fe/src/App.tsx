
import './App.css'
import { Button } from './component/ui/button'
import PlusIcon from './icons/PlusIcon'

function App() {
  

  return (
    <>
      <Button startIcon={<PlusIcon/>} size='sm' variant='primary' text='Share'></Button>
      <Button  startIcon={<PlusIcon/>}  size='md' variant='secondary' text='Add content'></Button>
      <Button  startIcon={<PlusIcon/>}  size='lg' variant='secondary' text='Add content'></Button>
    
    </>
  )
}

export default App
