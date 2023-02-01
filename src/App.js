import './App.css';
import { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState('');
  const [urlList, setUrlList] = useState([]);
  const handleInputChnage = (event) => {
    // console.log(event.target.value)
    const lines = event.target.value.split(/[.\n]+/)
    console.log(lines);
  }
  return (
    <div className="App">
      <div className='main'>
        <textarea rows="30" cols="80" name="description" placeholder='Enter input here...' onChange={handleInputChnage}>
          {inputText}
        </textarea>

        <div className='ImageList'>
          
        </div>

      </div>
    </div>
  );
}

export default App;
