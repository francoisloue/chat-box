<template>
    <div class="chat-log">
        <chat-messages v-for="message in messages" v-bind:key="message" :message="message"></chat-messages>
        <div class="empty" v-show="messages.length === 0">
            Nothing here yet !
        </div>
    </div>
</template>

<script>
import ChatMessages from './ChatMessages.vue'
export default {
    props: ['messages'],
    components: { ChatMessages },
    setup () {
        return {}
    }
}
</script>

<style lang="css">
.chat-log .chat-message:nth-child(even) {
    background-color: #ccc;
}

.empty {
    padding: 1rem;
    text-align: center;
}
</style>
