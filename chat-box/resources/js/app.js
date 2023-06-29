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
            messages: [{message: "Yo", user: "Michel"}, {message:"Hey", user:"Gros"}]
        }
    },
    methods: {
        addMessage(message) {
            this.messages.push(message);
        }
    },
});

app.mount("#app");
