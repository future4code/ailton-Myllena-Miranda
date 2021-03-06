import React from 'react'
import styled from 'styled-components'
import {useState} from 'react';
import './styles.css'
import react from 'react'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [
        {id: Date.now(),
        texto: "Lavar roupas",
      completa: false},
      {id: Date.now(),
        texto: "Dar comida para os cachorros",
      completa: true
      },
      ],
      inputValue: '',
      filtro: ''
    }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.id === this.state.tarefas) {
      localStorage.setItem("tarefas", JSON.stringify(this.state.tarefas));
    }
  };

  componentDidMount() {
    const tarefasExibir = localStorage.getItem("tarefas");
    if (tarefasExibir) {
      const dadosTarefa = localStorage.getItem("tarefas");
      const tarefasConvertidos = JSON.parse(dadosTarefa);
      this.setState({ id: tarefasConvertidos[0]?.id });
      this.setState({ texto: tarefasConvertidos[0]?.texto });
      this.setState({ completa: tarefasConvertidos[0]?.completa });
    }
  };

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value})
  };

  criaTarefa = () => {
    const listaTarefas = [...this.state.tarefas];
    const novaTarefa = {
      id: Date.now(),
        texto: this.state.inputValue,
      completa: false,
    };
    listaTarefas.push(novaTarefa);
    this.setState({tarefas:listaTarefas});
    localStorage.setItem("tarefa", JSON.stringify(listaTarefas) )
  }

  selectTarefa = (id) => {
const novaListaTarefas = this.state.tarefas.map((tarefa) =>{
if(id === tarefa.id){
const tarefaModificada = {
  ...tarefa,
  completa: !tarefa.completa
}
return tarefaModificada
}else{
  return tarefa
}
})
this.setState({tarefas: novaListaTarefas})
  }

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value})
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button type="submit" onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
