import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

import "./App.css";

function App() {
  const [codigo, setCodigo] = useState("");
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [livros, setLivros] = useState([]);

  function cadastrar() {
    let livro = {
      codigo,
      titulo,
      autor,
    };
    setLivros([livro, ...livros]);
    limparForm();
  }

  function excluir(codigo) {
    livros.forEach((livro, index) => {
      if (livro.codigo === codigo) {
        livros.splice(index, 1);
        setLivros([...livros]);
      }
    });
  }

  function generatePassword() {
    return Math.floor(Math.random() * 30 + 1);
  }

  function limparForm() {
    setCodigo("");
    setTitulo("");
    setAutor("");
  }

  return (
    <div className="App">
      <h1 className="title">Cadastrar Livros</h1>
      <div className="container">
        {/* <div className="inputArea">
          <p>Código</p>
          <input
            onChange={(e) => {
              setCodigo(e.target.value);
            }}
            type="text"
            name="Código"
            placeholder="###"
            disabled
          />
        </div> */}
        <div className="inputArea">
          <p>Título</p>
          <input
            value={titulo}
            onChange={(e) => {
              setTitulo(e.target.value);
            }}
            type="text"
            name="Título"
            placeholder="título"
          />
        </div>
        <div className="inputArea">
          <p>Autor</p>
          <input
            value={autor}
            onChange={(e) => {
              setAutor(e.target.value);
            }}
            type="text"
            name="Autor"
            placeholder="autor"
          />
        </div>
        <div>
          <button onClick={cadastrar} type="submit">
            SALVAR
          </button>
        </div>
      </div>
      <table className="table1">
        <thead>
          <tr>
            <th>codigo</th>
            <th>titulo</th>
            <th>autor</th>
            <th>Ação</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro, codigo) => {
            return (
              <tr>
                <td>{generatePassword(livro.codigo)}</td>
                <td>{livro.titulo}</td>
                <td>{livro.autor}</td>
                <td>
                  <button
                    className="icon-trash"
                    onClick={() => {
                      excluir(livro.codigo);
                    }}
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <table className="table2">
        <thead>
          <tr>
            <th>Total de livros cadastrados: {}</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default App;
