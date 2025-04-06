
import './App.css'
import { Button } from './component/ui/button'
import PlusIcon, { ShareIcons } from './icons/PlusIcon'

function App() {
  

  return (
    <>
      <br />
      <Button startIcon={<PlusIcon size='lg'/>} endIcon={<ShareIcons size='md'/>} size='sm' variant='primary' text='Share'></Button>
      <br />
      
      <Button  startIcon={<PlusIcon size='lg' />} endIcon={<ShareIcons size='lg'/>}  size='md' variant='secondary' text='Add Content'></Button>
      <br />
      <Button  startIcon={<PlusIcon size='lg'/>} endIcon={<ShareIcons size='lg'/>}  size='lg' variant='secondary' text='Like'></Button>
    
    </>
  )
}

export default App
