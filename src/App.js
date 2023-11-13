import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewsAdd from "./components/NewsAdd";
import NewsSearch from "./components/NewsSearch";
import NewsDelete from "./components/NewsDelete";
import NewsView from "./components/NewsView";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<NewsAdd />} />
          <Route path="search" element={<NewsSearch />} />
          <Route path="delete" element={<NewsDelete />} />
          <Route path="view" element={<NewsView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
