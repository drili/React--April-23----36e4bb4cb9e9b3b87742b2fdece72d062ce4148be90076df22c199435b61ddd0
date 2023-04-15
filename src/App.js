import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Layout from './layout/Layout';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UserContextProvider from './UserContext';
import CreatePost from './pages/CreatePost';

function App() {
    return (
        <UserContextProvider>
            <Routes>
                <Route path="/" element={<Layout></Layout>}>
                    <Route index element={
                        <IndexPage></IndexPage>
                    }>
                    </Route>

                    <Route path="/login" element={<LoginPage></LoginPage>}>
                    </Route>

                    <Route path="/register" element={<RegisterPage></RegisterPage>}>
                    </Route>

                    <Route path="/create" element={<CreatePost></CreatePost>}>
                    </Route>
                </Route>
            </Routes> 
        </UserContextProvider>
    );
}

export default App;
