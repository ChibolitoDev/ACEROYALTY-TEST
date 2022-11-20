import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ListPage from '../list';
import DetailedPage from '../itemDetail';
import BookingPage from '../booking';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListPage/>} />
        <Route path="/:id" element={<DetailedPage/>} />
        <Route path="/pays" element={<BookingPage/>} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
