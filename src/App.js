import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import BookShelf from './components/BookShelf/BookShelf';

function App() {
  return (
    <>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Layout></Layout>}></Route>
        <Route path={`${process.env.PUBLIC_URL}/bookshelf`} element={<BookShelf></BookShelf>}></Route>
        <Route path={`${process.env.PUBLIC_URL}/books/:id`} element={<Layout></Layout>}></Route>
      </Routes>
    </>
  );
}

export default App;