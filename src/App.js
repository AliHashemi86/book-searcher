import { useState } from "react";
import Search from "./component/Search";
import Result from "./component/Result";

function App() {
  const [result, setResult] = useState([]);
  return (
    <div className="App">
      <Search result={result} setResult={setResult} />
      <Result result={result} setResult={setResult} />
    </div>
  );
}

export default App;
