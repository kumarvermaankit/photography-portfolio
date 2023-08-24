import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Blogs from './components/Blogs'
import About from './components/About'
import About2 from './components/About2'
import Navigations from './components/Navigations'
import {storage} from './firebaseimage'
import { ref, list, listAll, getDownloadURL } from "firebase/storage"
// import data from './images.json'
const App = () => {
  const [img, setImg] = useState([])

  const importAll = (r) => r.keys().map(r);

  const getImageUrls = () => {
   const imageContext = require.context('./images', false, /\.(png|jpe?g|svg)$/);
   const imageUrls = importAll(imageContext).map((imageModule) => imageModule);
   return imageUrls;
 };
  // const downloadJSONFile = (data, filename) => {
  //   const jsonData = JSON.stringify(data);
  //   const blob = new Blob([jsonData], { type: 'application/json' });
  //   const url = URL.createObjectURL(blob);
  
  //   const a = document.createElement('a');
  //   a.href = url;
  //   a.download = filename;
  //   a.style.display = 'none';
  //   document.body.appendChild(a);
  //   a.click();
  //   document.body.removeChild(a);
  //   URL.revokeObjectURL(url);
  // };

  const getData = async () => {
    // fetch('https://drive.google.com/drive/folders/1-qdpiWiXMRzdKhOl6-KfQxNwEBDS-Zz5?usp=sharing').then(function (response) {
    //   // return response.json();
    //   console.log(response)
    // })
    //   .then(function (data) {
    //     setImg(data.hits)
    //     // console.log(data.hits[0].largeImageURL)
    //   });
    // const storageRef = ref(storage, 'images/');
    // const result = await listAll(storageRef);
  
    // const urlPromises = await result.items.map((imageRef) => getDownloadURL(imageRef));
  
    // const urls = await Promise.all(urlPromises);
    // if(urls.length > 0) downloadJSONFile(urls, 'images.json')
    console.log(getImageUrls())
    setImg(getImageUrls())
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/portfolio' element={<Portfolio img={img} />} />
      <Route path='/blogs' element={<Blogs />} />
      <Route path='/about' element={<About2 />} />
    </Routes>
    <Navigations />
    </>
  )
}

export default App