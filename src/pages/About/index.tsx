/*
 * @Author: kingford
 * @Date: 2021-05-17 14:23:01
 * @LastEditTime: 2021-05-18 10:54:27
 */
import { Link } from 'react-router-dom';

const About:React.FC = ()=>{
  return (
     <div>
       <h1>About hook</h1>
       <nav>
        <Link to="/">Home</Link> |{' '}
        <Link to="about">About</Link>
      </nav>
    </div>
  )
}

export {About}