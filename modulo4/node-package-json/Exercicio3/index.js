const listaTarefa = () => {
    const tarefa = process.argv[2];
    let arrayTarefas = [{tarefa:"comer"}];
    arrayTarefas.push({tarefa:tarefa});
    return arrayTarefas;
  };
  
  console.table(listaTarefa());