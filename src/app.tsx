import './styles.css'
import img from './computadora.jpg'
import logo from './slack.svg'

export const App = () => {
  return <>
    <h1>React TypeScript Webpack</h1>
    <img src={img} alt="img" width="300" height="300" />
    <img src={logo} alt="logo" width="300" />
  </>
}