
const { createApp } = Vue

createApp({
    data() {
        return {
            todoNuovo: "",
            todo: [

                {
                    lezione: 'lezione sul DOM',
                    isActive: false
                },
                {
                    lezione: 'lezione if-else',
                    isActive: false
                },
                {
                    lezione: 'lezione ciclo for',
                    isActive: false
                }


            ],
            

        }
    },

    methods: {
        lineThrough(index) {
            this.todo[index].isActive = !this.todo[index].isActive
        },

        rimuoviCompito(index) {
            this.todo.splice(index, 1)
        },

        aggiungiTodo() {
             if (this.todoNuovo !== '') {

                const nuovoTodo = {
                    lezione: this.todoNuovo,
                    isActive: false
                };

                this.todo.unshift(nuovoTodo)
                
            }
            this.todoNuovo = ''


        },


    }

}).mount('#app')