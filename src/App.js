import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Intro from './components/Intro/Intro';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Layout></Layout>}></Route>
        <Route exact path="/intro" element={<Intro></Intro>}></Route>
      </Routes>
    </>
  );
}

export default App;