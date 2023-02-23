import "./stylesheets/main.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Setting from "./pages/Setting";
import Reels from "./pages/Reels";
import ChatBox from "./pages/ChatBox";
import Profile from "./pages/profile/Profile";
import StoryPage from "./pages/story/StoryPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="/explore" element={<Explore></Explore>}></Route>
          <Route path="/reels" element={<Reels></Reels>}></Route>
          <Route path="/inbox" element={<ChatBox></ChatBox>}></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
          <Route path="/setting" element={<Setting></Setting>}></Route>
        </Route>
        <Route path="/stories" element={<StoryPage></StoryPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
