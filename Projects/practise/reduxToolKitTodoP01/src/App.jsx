import './App.css'
import Todos from './Components/ListTodos'
import { store } from './App/Store'
import { Provider } from 'react-redux'
import AddTodo from './Components/AddTodo'

function App() {


  return (
    <Provider store={store}>
      <AddTodo />
      <Todos />
    </Provider>
  )
}

export default App
