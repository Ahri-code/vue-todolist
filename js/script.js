const { createApp } = Vue

createApp({
    data() {
        return {
            todoList: [
                {
                    text: "Lavorare",
                    done: false,
                },
                {
                    text: "Fare la spesa",
                    done: true,
                },
                {
                    text: "Andare a correre",
                    done: true,
                },
                {
                    text: "Cucinare",
                    done: false,
                }
            ]
        }
    },
    methods: {
        
    }
}).mount('#app')