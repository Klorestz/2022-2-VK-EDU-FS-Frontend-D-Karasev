import React from "react";
import './App.css';
import PageListOfChats from "./pages/PageLIstOfChats/PageListOfChats";
import PageChat from "./pages/PageChat/PageChat";
import PageProfile from "./pages/PageProfile/PageProfile";
import {HashRouter as Router, Routes, Route} from "react-router-dom";

class App extends React.Component{

     constructor(props) {
         super(props);
         this.handleChatClick = this.handleChatClick.bind(this);
         this.state = {
             name: "",
            chat_id : 0
        }
     }

     handleChatClick(chat_id, name){
         this.setState({name : name, chat_id: chat_id})
     }


    render() {
        return (
            <Router>
                <div>
                    <Routes>
                        <Route path='/' element={<PageListOfChats handlechatclick={this.handleChatClick} />}/>
                        <Route path='/chat/:id' element={<PageChat id={this.state.chat_id} name={this.state.name}/>}/>
                        <Route path='/profile' element={<PageProfile/>}/>
                    </Routes>
                </div>
            </Router>
        );
  }
}

export default App;
