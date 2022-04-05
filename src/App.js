import {ChatEngine} from 'react-chat-engine';
import ChatFeed from'./Component/ChatFeed'
import './App.css';

function App() {
  return (
    <div className="App">
      <ChatEngine
      height="100vh"
      projectID= "5deed108-44f1-40d5-b18f-ad905990c99f"
      userName= "Daniel"
      userSecret= "1234567890"
      renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>} 
      onNewMessage={()=> new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      
      />
    </div>
  );
}

export default App;
