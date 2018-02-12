import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends React.Component {
  
  state = {
    friends: friends
    //if name is not supplied defaults to name of variable
  };

  removeFriend = (id) => {
    console.log(id);
    const newFriends = this.state.friends.filter(friend => friend.id !== id);
    this.setState({friends: newFriends});
  }

render () {
  return(
  <Wrapper>
    <h1 className="title">Friends List</h1>
    {this.state.friends.map(friend => <FriendCard removeFriend={this.removeFriend} id={friend.id} key={friend.id} name={friend.name} image={friend.image} occupation={friend.occupation} location={friend.location}/> )}
  </Wrapper>
)};


}

export default App;