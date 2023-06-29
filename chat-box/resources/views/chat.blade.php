<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Chat</title>
    @vite('resources/js/app.js')
</head>
<body>
    <h1>Chatroom</h1>
    <div id='app'>
        <chat-log :messages="messages"></chat-log>
        <chat-composer v-on:messagesent='addMessage'></chat-composer>
    </div>
</body>
</html>
