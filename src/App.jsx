import './SASS/App.scss'
import Estudos from './Front-End/Front-End'
import Tabelas from './Front-End/Tabelas'
import CSS3 from './CSS3/estudosCSS3'
import Quadrado from './CSS3/Quadrado'
import JavaScript from './JavaScript & React/estudosJavaScript'
import State from './JavaScript & React/State'
import Effect from './JavaScript & React/Effect'
import Context from './JavaScript & React/Context'



function App() {
  return (
    <>
      <Estudos />
      <div style={{
        backgroundColor: 'GrayText',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Tabelas />
      </div>
      <CSS3 />
      <div style={{
        backgroundColor: 'GrayText',
        width: '500px',
        height: '250px',
      }}>
        <Quadrado />
      </div>
        <JavaScript />
        <State />
        <Effect />
        <Context />    
    </>
  )
}

export default App
