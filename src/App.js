
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash);

  const addCash = (cash) =>{
    dispatch({type: "ADD_CASH", payload: cash})
  }

  const getCash = (cash) =>{
    dispatch({type: "GET_CASH", payload: cash})
  }

  return (
    <div className="App">
      <button onClick={()=> addCash(Number(prompt()))}>Пополнить счет</button>
      {cash}
      <button  onClick={()=> getCash(Number(prompt()))}>Снять со счета </button>
    </div>
  );
}

export default App;
