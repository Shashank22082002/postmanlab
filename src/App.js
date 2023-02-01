import './App.css';
import { useState, useEffect } from 'react';
import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  apiKey: process.env.REACT_APP_API_KEY,
});
const openai = new OpenAIApi(configuration);
function App() {

  const [inputText, setInputText] = useState('');
  const [userPrompt, setUserPrompt] = useState("");
  const [result, setResult] = useState("");

  const generateImage = async () => {
    const res = await openai.createImage({
      prompt: userPrompt,
      n: 3,
      size: "512x512",
    });
    console.log(res.data.data[0].url);
    console.log(res.data.data);
    setResult(res.data.data);
  };
  return (
    <div className="App">
      <div className='main'>
        <textarea rows="30" cols="80" name="description" value={inputText} placeholder='Enter input here...' onChange={(event) => {
          const lines = event.target.value.split(/[.\n]+/)
          console.log(lines);
          setUserPrompt(event.target.value)
          setInputText(event.target.value)
        }}/>
        {/* <div className='ImageList'>
          {
            result.forEach((image, index) => {
              <img className="result-image" src={image.url} alt="result" key={index} />
            })
          }
        </div> */}
        <button onClick={generateImage}></button>
        {result.length > 0 ? (
            result.map((image, index) => (
              <img key={index} src={image.url} alt="Image" />
            ))
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}
export default App;
