@extends('layouts.app')

@section('chat')
<h1>Chatroom</h1>
<div id='app'>
    <chat-log :messages="messages"></chat-log>
    <chat-composer v-on:messagesent='addMessage'></chat-composer>
</div>
@endsection
