
import './App.css';
import React, { useEffect, useState } from 'react';

const withLoader = (Element, url) => {
  return props => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url).then(response => response.json())
    .then(data =>  setData(data.message))
    
  }, []);

   if(!data) {
    return  <div>Loading!!!</div>
   }

  return <Element data={data}/>;
}
}
const DogView = (props) => {
  return <div>
    <img src ={props.data} />
  </div>
}

const DogViewWithLoader = withLoader(DogView, 'https://dog.ceo/api/breeds/image/random');
function App() {
  return (
    <div className="App">
      <DogViewWithLoader />
    </div>
  );
}

export default App;
