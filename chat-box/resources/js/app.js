import './bootstrap';

import { createApp } from 'vue';

import ChatMessages from "./components/ChatMessages.vue";
import ChatLog from "./components/ChatLog.vue";
import ChatComposer from "./components/ChatComposer.vue";



const app = createApp({
    components: {
        ChatMessages,
        ChatLog,
        ChatComposer,
    },
    data() {
        return {
            messages: []
        }
    },
    methods: {
        addMessage(message) {
            this.messages.push(message);
            axios.post('/messages', message).then(response => {
                console.log('message sent !')
            });
        }
    },
    created() {
        axios.get('/messages').then(response => {
            this.messages = response.data
        });

        Echo.join('chatroom')
            .here()
            .joining()
            .leaving()
            .listen('MessagePosted',(e) => {
                // Handle event
            }),
    }
});

app.mount("#app");
