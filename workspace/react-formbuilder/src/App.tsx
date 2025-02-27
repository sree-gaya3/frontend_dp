import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormBuilder from './builders/FormBuilder';
import PostCard from './components/PostCard';

function App() {
  let elements = new FormBuilder()
    .input({"label": "Name"})
    .input({"label": "Email"})
    .checkbox({"label": "I agree to the terms and conditions"})
    .build();

  return (
    <div className="App">
      {elements}
      <PostCard  
        post={{
          id: 1,
          title: 'Hello world',
          content: 'This is a post content',
          user: {
            id: 1,
            name: 'Harish Rao'
          }
        }}>
          <PostCard.Title />
          <PostCard.User />
        </PostCard>
    </div>
  );
}

export default App;
