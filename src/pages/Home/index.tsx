/*
 * @Author: kingford
 * @Date: 2021-05-17 14:23:05
 * @LastEditTime: 2021-05-17 15:31:33
 */
import { Link } from 'react-router-dom';
import { Button } from 'antd';

const Home:React.FC = ()=>{
  return (
     <div>
      <h1>Home</h1>
      <Button>Button</Button>
      <nav>
        <Link to="/">Home</Link> |{' '}
        <Link to="about">About</Link>
      </nav>
    </div>
  )
}

export {Home}