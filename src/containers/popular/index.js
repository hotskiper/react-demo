import React, {useState, useEffect, useContext} from 'react'

const TestContext = React.createContext()
function App(props) {
  // const[top, setTop] = useState('top');
  const testVal = 'aaa'
  return (
    <TestContext.Provider value={{uname: testVal}}>
      <div className="App">
        Popular
        <StateComp />
        <Counter />
      </div>
    </TestContext.Provider>
  )
}

function StateComp(props){
  const[name, setName] = useState('init');
  const[obj, setObj] = useState(null);
  const { uname } = useContext(TestContext)
  const handleClick = () => { 
    setName(prev => prev + 'asd');
    console.log(uname)
    
    setObj({...obj, a: 2})
  }
  return (
    <div onClick={()=>{
      handleClick();
    }}>{name}{obj?obj.a:''}
    <p></p>
    </div>
  )
}

function Counter(props){
  const [count, setCount] = useState(0);
  const [obj, setObj] = useState({num: 0})
  const { uname } = useContext(TestContext)
  useEffect(() => {
    document.title = count;
    return () => {
      document.title = uname
    }
  })
  const handleClick = ()=>{
    
    for(let i = 0 ; i < 3 ; i++){
      console.log(666);
      // setCount(count + 1)
      setCount(prev => prev + 1)
      let newObj = obj;
      newObj.num++;
      setObj(newObj)
    }
  }
  return (
    <div onClick={handleClick}>{count},{obj.num}</div>
  )
}


export default App
