import React, {useState, useEffect} from "react";
import classes from "./PageChat.module.css"
import HeaderChat from "../../components/HeaderChat/HeaderChat";
import MessagesForm from "../../components/MessagesForm/MessagesForm";

export default function PageChat({handleChatListClick}){

    const [value, setText] = useState('');
    const [messages, setMessages] = useState([])

    function MessageFromLocalStorage(){
        let messages = localStorage.getItem("messages");
        if (messages == null) return;
        messages = JSON.parse(messages)
        setMessages(messages)
    }

    function handleSubmit (event) {
        event.preventDefault();
        let existingMessages = JSON.parse(localStorage.getItem("messages"));
        let index = JSON.parse(localStorage.getItem("index"));
        if (existingMessages === null) {
            existingMessages = [];
            index=0;
        }
        if (!value) return;
        let template = {
            "id" : index++,
            "date" : new Date().toLocaleTimeString(),
            "text" : value,
            "sender" : 'Danila',
        }
        localStorage.setItem("index", JSON.stringify(index));
        existingMessages.push(template);
        localStorage.setItem("messages", JSON.stringify(existingMessages));
        setText('')
    }

    function handleChange(event) {
        setText(event.target.value)
    }

    useEffect(() => {
        MessageFromLocalStorage()}, [value])

    return(
        <div className={classes.dialogue}>
            <HeaderChat
                name={"Дженнифер Эшли"}
                last_visited={"был(а) 1 мин назад"}
                handleChatListClick={handleChatListClick}
            >
            </HeaderChat>
            <MessagesForm
                messages={messages}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                value={value}>
            </MessagesForm>
        </div>
    )
}