import React, {useState, useEffect} from "react";
import classes from "./PageChat.module.css"
import HeaderChat from "../../components/HeaderChat/HeaderChat";
import MessagesForm from "../../components/MessagesForm/MessagesForm";

export default function PageChat({id, name}){

    const [value, setText] = useState('');
    const [messages, setMessages] = useState([]);

    function handleSubmit (event) {
        event.preventDefault();
        let existingMessages = JSON.parse(localStorage.getItem("messages"));
        let index = JSON.parse(localStorage.getItem("index"));
        if (existingMessages === null) {
            existingMessages = {};
            index=0;
        }
        if (!value) return;
        let template = {
            "id" : index++,
            "date" : new Date().toLocaleTimeString(),
            "text" : value,
            "sender" : 'Danila',
        }
        if (!(id in existingMessages))
        {
            existingMessages[id] = []
        }
        localStorage.setItem("index", JSON.stringify(index));
        existingMessages[id].push(template);
        localStorage.setItem("messages", JSON.stringify(existingMessages));
        setText('')
    }

    function handleChange(event) {
        setText(event.target.value)
    }

    useEffect(() => {
            let messages = localStorage.getItem("messages")
            if (messages == null) return;
            messages = JSON.parse(messages)
            if (id in messages)
            {
                setMessages(messages[id])
            }
            }, [value, id])

    return(
        <div className={classes.dialogue}>
            <HeaderChat
                name={name}
                last_visited={"был(а) 1 мин назад"}
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