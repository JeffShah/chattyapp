import React, {Component} from 'react';

class ChatBar extends Component {
    render() {
        return (
            <div>
        <footer className="chatbar">
            <input className="chatbar-username" 
            placeholder="Your Name (Optional)" 
            defaultValue={this.props.currentUser}
            onKeyPress={this.props.addNewName}
            />
            <input className="chatbar-message" 
            placeholder="Type a message and hit ENTER"
            onKeyPress={this.props.addNewMessage}/>
        </footer>
        </div>
        );
      }
}
export default ChatBar;