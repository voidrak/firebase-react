import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { db, storage } from "./config/firebase";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";

function App() {
  const [count, setCount] = useState(0);
  const [fileUpload, setFileUpload] = useState(null);
  const [movieList, setMovieList] = useState([]);
  const [newMovieTitle, setNewMovieTitle] = useState([]);
  const [newMovieDate, setNewMovieDate] = useState([]);
  const [newMovieOscar, setNewMovieOscar] = useState([]);
  const movieCollectionRef = collection(db, "movies");

  useEffect(() => {
    const getMoveList = async () => {
      try {
        const data = await getDocs(movieCollectionRef);
        const filterData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setMovieList(filterData);
        console.log(movieList);
      } catch (err) {
        console.log(err);
      }
    };
    getMoveList();
  }, []);

  const uploadFile = async () => {
    if (!fileUpload) {
      console.log("No file selected");
      return;
    }
    const filesFolderRef = ref(storage, `projectFiles/${fileUpload.name}`);
    try {
      await uploadBytes(filesFolderRef, fileUpload);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitMoive = async () => {
    try {
      await addDoc(movieCollectionRef, {
        title: newMovieTitle,
        releaseDate: newMovieDate,
        receivedAnOscar: newMovieOscar,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Firebase</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div className="   space-x-4 border border-black p-2 ">
        <input
          className=" border-red-500 border space-x-4  "
          onChange={(e) => setNewMovieTitle(e.target.value)}
          placeholder="Movie title..."
        />
        <input
          className=" border-red-500 border space-x-4  "
          onChange={(e) => setNewMovieDate(e.target.value)}
          placeholder="Release Data"
        />
        <input
          type="checkbox"
          htmlFor="oscar"
          checked={newMovieOscar}
          onChange={(e) => setNewMovieOscar(e.target.checked)}
        />
        <label htmlFor="oscar">Received Oscar</label>

        <button onClick={onSubmitMoive} className="mt-4 bg-green-400 p-1 ">
          {" "}
          Submit Movie
        </button>
      </div>

      <div className="flex my-3">
        <input
          type="file"
          onChange={(e) => {
            setFileUpload(e.target.files[0]);
          }}
        />
        <button onClick={uploadFile} className="bg-green-300 ">
          Upload File
        </button>
      </div>
    </>
  );
}

export default App;
