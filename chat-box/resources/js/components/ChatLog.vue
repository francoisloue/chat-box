<template>
    <div class="chat-log">
        <chat-messages v-for="message in messages" :message="message"></chat-messages>
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
</style>
