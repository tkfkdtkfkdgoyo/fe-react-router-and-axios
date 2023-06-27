import { BrowserRouter, Routes, Route } from "react-router-dom";
import OwnerId from "./pages/ownerId";
import OwnerCreate from "./pages/ownerIdCreate";
import Article from "./pages/articles";
import ArticledEdit from "./pages/articledEdit";
import NotFound from "./pages/notFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:name" element={<OwnerId/>} />
        <Route path="/:name/create" element={<OwnerCreate/>} />
        <Route path="/:name/articles/:articleId" element={<Article/>}/>
        <Route path="/articles/:articleId/edit" element={<ArticledEdit/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
