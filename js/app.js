
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

    let text = this.inputTask.trim() // trim serve per togliere gli spazi vuoti all'inizio e alla fine

    // impedire di aggiungere una stringa vuota
    if (text === '') {
      return
    }

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

  if (oggetto.done === false) {
    oggetto.done = true;
  } else {
    oggetto.done = false;
  }
    
  // console.log(oggetto.done);
}

// cancellare la task
function deleteTask (index) {
    oggettoCorrente = index;
    this.toDoList.splice(index, 1);
}
