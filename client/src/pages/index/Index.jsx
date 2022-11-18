import User from './User'
import Visitor from './Visitor'

const Index = () => {
    const user = false
  return (
    <div>{user ? <User/> : <Visitor/> }</div>
  )
}

export default Index