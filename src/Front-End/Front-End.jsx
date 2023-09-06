import Carousel from 'react-material-ui-carousel';
import Tabelas from './Tabelas';
import CSS3 from '../CSS3/CSS3';
import State from '../JavaScript & React/State';
import Effect from '../JavaScript & React/Effect';
import Context from '../JavaScript & React/Context';
import JavaScript from '../JavaScript & React/JavaScript';
import SCSS from '../SASS/SCSS.JSX';
import React from '../JavaScript & React/React';

export default function Estudos() {
  let items = [
    {
      name: "HTML5",
      description: <Tabelas />
    },
    {
      name: "CSS3",
      description: <CSS3 />
    },
    {
      name: "SASS",
      description:  <SCSS />
    },
    {
      name: "Java Script",
      description: <JavaScript />
    },
    {
      name: "React",
      description: <React />
    },
    {
      name: "Use state",
      description: <State />
    },
    {
      name: "Use effect",
      description: <Effect />
    },
    {
      name: "Use context",
      description: <Context />
    }
  ]
  return (
    <>
      <h1> Estudos Front-End</h1>
      <img src="/public/html5.png" alt="html5" height={100} />
      <img src="/public/CSS3.png" alt="CSS3" height={80} style={{ margin: '15px' }} />
      <img src="/public/SASS.png" alt="SASS" height={80} />
      <img src="/public/JavaScript.png" alt="Java Script" height={100} style={{ margin: '10px' }} />
      <img src="/public/React.png" alt="React" height={100} />
      <Carousel className='carrousel'>
        {items.map((item, i) => <Item key={i} item={item} />)}
      </Carousel>
    </>
  )
}

function Item(props) {
  return (
    <div>
      <h2 className='name'>{props.item.name}</h2>
      <h3 className='description'>{props.item.description}</h3>
    </div>
  )
}