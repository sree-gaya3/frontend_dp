
import './App.css';
import React from 'react';
import Input from './components/Input';
import Display from './components/Display';
import DogImage from './components/DogImage';

const SpanWithText = ({ text, props }) => {
  return <span {...props}>{text}</span>
}

const Colored = ({ children }) => {
  return React.cloneElement(children, {
    style: { 
      backgroundColor: 'brown',
      color: 'red'
    },
    onClick: () => alert('Clicked on span')
  })
}

export default function App() {
  return (  
    // <Colored>
    //     <SpanWithText text="Hello React Span Comp!!!" />
    // </Colored>    
    <>
      <Input />
      <Display />
      <DogImage />
    </>
  );
}