const { createApp } = Vue

createApp({
    data() {
        return {
            check: false,
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
        del() {
            if (check == false) {
                check = true;
                return check;
            }
            else {
                check = false;
                return check;
            }
        }
    }
}).mount('#app')