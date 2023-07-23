import './App.css';
import Gallery from './Gallery'
import ButtonBar from './ButtonBar'
import { useState, useEffect } from 'react'

function App() {
  let [data, setData] = useState({})
  let [artId, setArtId] = useState(12720)

  useEffect(() => {
    document.title = 'Welcome to ArtWorld'
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
    .then(response => response.json())
    .then(resData => setData(resData))
  }, [artId])

  const handleIterate = (e) => {
    setArtId(artId + Number(e.target.value))
  }

  return (
    <div className="App">
      <Gallery
        primaryImage={data.primaryImage}
        artistDisplayName={data.artistDisplayName}
        title={data.title}
        medium={data.medium}
        objectID={data.objectID}
        culture={data.culture}
      />
      <ButtonBar updateId={handleIterate}/>
    </div>
  );
}

export default App;

/*
import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import Gallery from './Gallery'
import ButtonBar from './ButtonBar';

function App() {
let [data, setData] = useState({})
let [artId, setArtId] = useState(437113)//(12720)

useEffect(() => {
    document.title='Welcome to Artworld'
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
    .then(response => response.json())
    .then(resData => setData(resData))
}, [artId])

    

  return (
    <div className="App">
      <h1>Gallery</h1>
      <h1>ButtonBar</h1>
    </div>
  );
}

export default App;
*/