import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import toast from './middleware/toast';
import api from './middleware/api'
import reducer from './reducers/index';

/* 
    store = {
        entities: {
            articles: {

            },
            tags: {

            }
        },
        auth: {
            userId: 1,
            name: "John"
        },
        ui: {
            articles: { query: "...", sortBy: "..."},
        }
    }
*/

export default function config() {
    return configureStore({
        reducer,
        middleware: [
            toast,
            api
        ]
    });
}