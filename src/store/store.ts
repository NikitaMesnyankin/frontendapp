import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AnyAction, CombinedState, combineReducers, configureStore, ThunkDispatch } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { usersReducer as users } from './reducers/users';
import { authReducer as auth } from './reducers/auth';
import { reviewsReducer as reviews } from "./reducers/reviews"
import { filmsReducer as films } from "./reducers/films"
import storage from 'redux-persist/lib/storage'

export const persistedAuthReducer = persistReducer({
    key: "root",
    storage
}, auth);

const reducer = combineReducers({
    persistedAuthReducer,
    users,
    reviews,
    films,
});

export const store = configureStore({
    reducer,
    enhancers: [],
});

export const persistor = persistStore(store);

export type State = ReturnType<typeof store.getState>;
export type Action = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = (): ThunkDispatch<CombinedState<State>, null, AnyAction> => useDispatch<Action>();
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
