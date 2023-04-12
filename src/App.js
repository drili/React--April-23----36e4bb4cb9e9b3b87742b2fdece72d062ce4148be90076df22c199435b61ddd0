import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Layout from './layout/Layout';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout></Layout>}>
                <Route index element={
                    <IndexPage></IndexPage>
                }>
                </Route>

                <Route path="/login" element={<LoginPage></LoginPage>}>
                </Route>
            </Route>
        </Routes> 
    );
}

export default App;
