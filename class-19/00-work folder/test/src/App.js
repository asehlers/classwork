import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";
const App = () => {
  const list = friends.map(friend => <FriendCard key={friend.id} name={friend.name} image={friend.image} occupation={friend.occupation} location={friend.location}/> )


return (
  <Wrapper>
    <Title>Friends List </Title>
    {list}
  </Wrapper>
)};

export default App;
