import { useEffect } from 'react'
const Test = (props) => {
  useEffect(() => {
    console.log('load test');
  }, [])
  return (
    <div>
      <div>{props.text}</div>
    </div>
  )
}

export default Test
