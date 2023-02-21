
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
        addTask () {

            // creo la task come oggetto
            let task = {
                text: this.inputTask,
                done: false,
            }
            // pusho l'oggetto dentro l'array
            toDoList.push(task);
            // resetto il valore input della task
            this.inputTask = '';

        },
        taskEnd (oggetto) {
            oggetto.done = true;
            // console.log(oggetto.done);
        }
    }
  }).mount('#app')







  