import { useState } from 'react';
import LazyImage from './components/LazyImage';
//import reactLogo from './assets/react.svg';
//import viteLogo from '/vite.svg';
import './App.css';

function App() {
  return (
    <>
      <div>
        <div className="frame">
          <img src="https://fastly.picsum.photos/id/426/200/300.jpg?hmac=ATVZT7wbjRxxBKYqLXE043ImnR_uNOkz00T9dWGYuow" />
        </div>
        <div className="frame">
          <img src="https://fastly.picsum.photos/id/426/200/300.jpg?hmac=ATVZT7wbjRxxBKYqLXE043ImnR_uNOkz00T9dWGYuow" />
        </div>
        <div className="frame">
          <img src="https://fastly.picsum.photos/id/426/200/300.jpg?hmac=ATVZT7wbjRxxBKYqLXE043ImnR_uNOkz00T9dWGYuow" />
        </div>
        LI
        <LazyImage />
      </div>
    </>
  );
}

export default App;

//https://picsum.photos/200/300
/*
<div>
          <img src="https://picsum.photos/200/300" />
        </div>
        <div>
          <img src="https://picsum.photos/200/300" />
        </div>
        <div>
          <img src="https://picsum.photos/200/300" />
        </div>
        <div>
          <img src="https://picsum.photos/200/300" />
        </div>
        <div>
          <img src="https://picsum.photos/200/300" />
        </div>
        <div>
          <img src="https://picsum.photos/200/300" />
        </div>*/
