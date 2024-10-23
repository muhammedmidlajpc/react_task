import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./components/form/Form";
function App() {
  return (
    <div className="App">
      {/* <Form/> */}
      <Routes>
        <Route path="/" element={<Home/>}>
        {/* <Route path="/form" element={<Form/>} /> */}
        </Route>
        <Route path="/form" element={<Form/>} />

      </Routes>
    </div>
  )
}
export default App;
