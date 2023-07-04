import "./App.css";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");

  const checksConsecutiveSpaces = (text) => {
    if (text.length > 1) {
      return "🤸";
    } else {
      return text;
    }
  };

  function clearText() {
    setText("");
    setOutput("");
  }

  function generateText(text) {
    if (text.trim().length === 0) {
      setText("");
      setOutput("");
    } else {
      const genText = text.replace(/ +/g, checksConsecutiveSpaces(text));

      setText(text);
      setOutput(genText);
    }
  }

  function copyText() {
    navigator.clipboard.writeText(output);
    alert("Copied Successfully");
  }

  return (
    <div>
      <div className="container">
        <h1>
          Beshiefinism by <span className="highlight">Nicko Balboa</span>
        </h1>
        <textarea
          type="text"
          value={text}
          onChange={(e) => generateText(e.target.value)}
          className="input_text"
          rows="5"
        ></textarea>
        <button className="clear" onClick={() => clearText()}>
          Clear
        </button>
        <div className="output">
          <button onClick={() => copyText()}>Copy</button>
          <p>{output}</p>
        </div>
      </div>
      <footer>
        <h2>
          <a
            href="https://github.com/NBalboa/beshiefinism"
            target="_blank"
            rel="noreferrer"
          >
            Source Code
          </a>
        </h2>
      </footer>
    </div>
  );
}

export default App;
