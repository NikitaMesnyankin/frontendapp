import React from 'react';
import { AppWrapper } from './App.styles';
import { Route, Routes } from 'react-router-dom';
import { Users } from '../pages/users/users';
import { Main } from "../pages/main/main"
import { Navbar } from "../pages/navbar/navbar";
import { Registration } from "../pages/registration/registration"
import {Login} from "../pages/login/login";

export const App: React.FC = () => {

    return (
        <AppWrapper>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Main/>}/>
                    <Route path='users' element={<Users/>}/>
                    <Route path="register" element={<Registration/>}/>
                    <Route path="login" element={<Login/>}/>
                </Routes>
        </AppWrapper>
    );
};