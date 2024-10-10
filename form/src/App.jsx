import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./components/form/Form";
function App() {
  return (
    <div className="App">
      <Form/>
      {/* <Routes>
        <Route path="/" element={<Home/>}>
        <Route path="/home/form" element={<Form/>} />
        </Route>
      </Routes> */}
    </div>
  )
}
export default App;
