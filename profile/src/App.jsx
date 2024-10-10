import { Form, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Message from "./pages/Message";
import Settings from "./pages/Settings";
import Blog from "./pages/Blog";
import Profile from "./pages/Profile";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Profile />} />
          <Route path="/message" element={<Message />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/blog" element={<Blog />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;