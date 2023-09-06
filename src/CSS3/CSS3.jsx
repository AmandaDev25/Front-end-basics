import Quadrado from "./Quadrado";

export default function CSS3() {
  return (
    <>
      <div style={{ height: '800px' }}>
        <img src="/public/CSS3.png" alt="CSS3" height={80} style={{ margin: '15px' }} />
        <h3>Se o html5 cria a estrutura da página o CSS3 estiliza criando formas e cores Além de dar vida a nosso site</h3>
        <h3>Flexbox em css</h3>
        <h4>
          Antes do módulo Flexbox Layout, havia quatro modos de layout:
          - Block, para seções de uma página da web
          - Inline, para texto
          - Table, para dados de tabela bidimensionais
          - Positioned, para posição explícita de um elemento
          O módulo de layout de caixa flexível torna mais fácil projetar uma estrutura de layout responsiva
          e flexível sem usar flutuação ou posicionamento.
        </h4>
        <h5>
          Os exemplos de flexbox está na figura abaixo
        </h5>
        <Quadrado />
      </div>
    </>
  )
}