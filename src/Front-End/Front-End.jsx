import Carousel from 'react-material-ui-carousel';



export default function Estudos() {
  let items = [
    {
      name: "HTML5",
      description: " HTML 5 é uma linguagem de marcação muito popular na programação web.Além que estruturar o corpo de uma página,podemos utilizar tags, elementos e atributos"
    },

    {
      name: "CSS3",
      description: " Se o html5 cria a estrutura da página o CSS3 estiliza criando formas e cores Além de dar vida a nosso site"
    },
    {
      name: "SASS",
      description: "É uma linguagem para design da página, ou seja um css com superpoderes. No exemplo acima temos uma tabela estilizada com CSS3 e Sass"
    },
    {
      name: "Java Script",
      description: "O Java Script é uma linguagem de programação para web extremamente popular.Versátil, com ela podemos criar um sistema inteiro, com desenvolvedores Front, Back, Mobile entre muitas outras, Java Script é a linguagem de programação mais flexível de todas."
    },
    {
      name: "React",
      description: "Já o react é um framework do Java Script que contém hooks,hooks são ganchos ou facilitadores para contrubuir para a facilidade na criação do seu código.Vamos ver um exemplo de Java Script e alguns hooks em React logo abaixo."
    },
    {
      name: "Use state",
      description: "O Use State assim como o nome sugere serve para mudar o estado da nossa aplicação. Vamos ver um exemplo com cores"
    },
    {
      name: "Use effect",
      description: "O Use Effect executa o ação da aplicação. Vamos ver um exemplo com números logo abaixo"
    },
    {
      name: "Use context",
      description: "O Use Context é um gerenciamento de estado globalmente. Vamos ver um exemplo com todos os h1 logo abaixo"
    }
  ]
  return (
    <>
      <h1> Estudos Front-End</h1>
      <img src="/public/html5.png" alt="html5" height={100} />
      <img src="/public/CSS3.png" alt="CSS3" height={80} style={{ margin: '15px' }} />
      <img src="/public/SASS.png" alt="SASS" height={80} />
      <img src="/public/JavaScript.png" alt="Java Script" height={100} style={{margin: '10px'}} />
      <img src="/public/React.png" alt="React" height={100} />
      <Carousel className='carrousel'>
        {
          items.map((item, i) => <Item key={i} item={item} />)
        }
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