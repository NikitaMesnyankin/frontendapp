import React from 'react';
import { AppWrapper } from './App.styles';
import { Route, Routes } from 'react-router-dom';
import { Users } from '../pages/users/users';
import { Main } from "../pages/main/main"
import { Navbar } from "../pages/navbar/navbar";
import { Registration } from "../pages/registration/registration"
import { Login } from "../pages/login/login";
import { Reviews } from "../pages/reviews/reviews";
import { Publisher } from "../pages/publisher/publisher"
import { Films } from "../pages/films/films";

export const App: React.FC = () => {
    return (
        <AppWrapper>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Main/>}/>
                    <Route path='users' element={<Users/>}/>
                    <Route path="register" element={<Registration/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="reviews" element={<Reviews/>}/>
                    <Route path="films" element={<Films/>}/>
                    <Route path="reviews/publish" element={<Publisher/>}/>
                </Routes>
        </AppWrapper>
    );
};