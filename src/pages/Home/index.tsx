/*
 * @Author: kingford
 * @Date: 2021-05-17 14:23:05
 * @LastEditTime: 2021-05-17 14:26:49
 */
import { Link } from 'react-router-dom';


const Home:React.FC = ()=>{
  return (
     <div>
      <h1>Home</h1>
      <nav>
        <Link to="/">Home</Link> |{' '}
        <Link to="about">About</Link>
      </nav>
    </div>
  )
}

export {Home}