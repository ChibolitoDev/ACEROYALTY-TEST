import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ListPage from '../itemList';
import DetailedPage from '../itemInformation';
import BookingPage from '../booking';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListPage/>} />
        <Route path="/:id" element={<DetailedPage />} />
        <Route path="/payment/:id" element={<BookingPage/>} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
