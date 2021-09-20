// Descrizione:
// Rifare l'esercizio della to do list come fatto assieme in classe:
// - stampare in pagina un item per ogni elemento contenuto in un array
// - ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
// - predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista
// Bonus:
// Aggiungere lo stato per ogni todo e modificare la visualizzazione dell'elemento in pagina, verde e barrato se il todo è stato fatto o rosso se non è ancora stato fatto.
// Prevedere inoltre un pulsante per modificare lo stato del singolo todo
// Google font: Lato

const app = new Vue({

    el: "#root",
    data: {
        todos: [
            {
                todo: "Fare i compiti",
                ceck: false,
            },
            {
                todo: "Fare la spesa",
                ceck: false,
            },
            {
                todo:"Fare il bucato",
                ceck: false,
            },
        ],
        newTodoInput: ""
    },
    methods: {
        addInTodo: function() {
            let newTodo = {
                todo : this.newTodoInput,
                ceck : false
            }
            if (this.newTodoInput != "") {
               this.todos.push(newTodo); 
               this.newTodoInput = ""
            };
        },
        removeTodo: function(todoInex) {
            this.todos.splice(todoInex, 1);
        },
        ceckTodo: function(todoInex){
            this.todos[todoInex]["ceck"] = true;
        },


    }
    
});