export default function Tabelas() {
  return (
    <div style={{height:'450px'}}>
      <img src="/public/html5.png" alt="html5" height={100} />
      <h2>Tabelas em HTML</h2>
      <p>HTML 5 é uma linguagem de marcação muito popular na programação web.Além que estruturar o corpo de uma página,podemos utilizar tags, elementos e atributos</p>
      <table style={{width:'100%'}}>
        <tbody>
          <tr>
            <th></th>
            <th>Amanda</th>
            <th>Valdinei</th>
            <th>Perseu</th>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>Apelidos</td>
            <td>Amandinha</td>
            <td>Nei</td>
            <td>Qui Qui</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}