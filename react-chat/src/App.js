import React from "react";
import './App.css';
import PageListOfChats from "./pages/PageLIstOfChats/PageListOfChats";
import PageChat from "./pages/PageChat/PageChat";

class App extends React.Component{

    constructor(props) {
        super(props);
        this.handleChatClick = this.handleChatClick.bind(this);
        this.handleChatListClick = this.handleChatListClick.bind(this);
        this.state = {
            page: "chat-list"
        }
    }

    handleChatClick(){
        this.setState({page : "chat"})
    }

    handleChatListClick(){
        this.setState({page: "chat-list"})
    }

    render() {
        return (
            <>
                {
                    this.state.page === "chat-list" ? <PageListOfChats handleChatClick={this.handleChatClick}/> :
                    <PageChat handleChatListClick={this.handleChatListClick}/>
                }
            </>
        );
  }
}

export default App;
