import './App.css'
import Button from './components/Button'
import Cart from './components/Cart'
import Counter from './components/Counter'

function App() {  

  return (
    <>
    <h1 className='mb-4'>React Learning</h1>
    <p>Using Tailwind with GitHub Actions</p>
    <br/><br/>
    <Button text='Green' />
    <Button cName='bg-blue-500' />
    <Button text='Orange' cName='bg-orange-500' />
    <hr/>
    <Cart></Cart>
    <hr/>
    <Counter/>
    <hr/>
    <Counter/>
    </>
  )
}

export default App
