import './styles.css'
import img from './computadora.jpg'
import logo from './slack.svg'
import {ClickCounter} from './ClickCounter'

export const App = () => {
  return <>
    <h1>Edited React TypeScript Webpack - {process.env.NODE_ENV} - {process.env.name}</h1>
    <img src={img} alt="img" width="300" height="300" />
    <img src={logo} alt="logo" width="300" />
    <ClickCounter />
  </>
}