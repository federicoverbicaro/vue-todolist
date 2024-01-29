
const { createApp } = Vue

createApp({
    data() {
        return {
           
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
                    lezione:'lezione ciclo for',
                    isActive: false
                }
                
                
            ],

        }
    },

    methods: {
        lineThrough(index){
            this.todo[index].isActive = !this.todo[index].isActive;
        },
        
        rimuoviCompito(){

        }


    }

}).mount('#app')