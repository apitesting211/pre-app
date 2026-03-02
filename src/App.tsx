import './App.css'
import Button from './components/Button'
import Cart from './components/Cart'
import Counter from './components/Counter'

import LoginClassForm from './components/LoginClassForm'
import { LoginForm } from './components/LoginForm'
import Todos from './components/Todos'


function App() {  

  return (
    <>
    <h1 className='mb-4'>React Learning</h1>
    <p>Using Tailwind with GitHub Actions</p>
    <br/><br/>
    <Todos/>
    <br/><br/>
    <LoginClassForm/>
    <br/><br/>
    <LoginForm/>
    <hr/>
    <Counter/>
    <hr/>
    <Counter/>
    <hr/>

    <Cart></Cart>
    <hr/>
    <br/>
    <Button text='Green' />
    <Button cName='bg-blue-500' />
    <Button text='Orange' cName='bg-orange-500' />
    </>
  )
}

export default App
