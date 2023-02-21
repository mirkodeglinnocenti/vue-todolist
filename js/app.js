
const toDoList = [

]

// Vue
const { createApp } = Vue

  createApp({
    data() {
      return {
        toDoList,
        inputTask: '', 
      }
    },
    methods: {
        addTask,
        taskEnd,
        deleteTask,
    }
  }).mount('#app')







//   Funzioni

// aggiungere la task
function addTask () {

    // creo la task come oggetto
    let task = {
        text: this.inputTask,
        done: false,
    }
    // pusho l'oggetto dentro l'array
    this.toDoList.push(task);
    // resetto il valore input della task
    this.inputTask = '';

}

// cambiare il valore di done
function taskEnd (oggetto) {
    oggetto.done = true;
    // console.log(oggetto.done);
}

// cancellare la task
function deleteTask (index) {
    oggettoCorrente = index;
    this.toDoList.splice(index, 1);
}
