import React from 'react';

import { AppWrapper } from './App.styles';
import { Route, Routes } from 'react-router-dom';
import { Users } from '../pages/users/users';

export const App: React.FC = () => {

    return (
        <AppWrapper>
            <Routes>
                <Route path={'/users'} element={<Users />} />
            </Routes>
        </AppWrapper>
    );
};