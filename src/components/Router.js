import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Home';
import Feels from './Feels';
import Pics from './Pics';



const routes = [
    {
        path: '/Home',
        component: {Home}
    },
    {
        path: '/Feels',
        component: {Feels}
    },
    {
        path: '/Pics',
        component: {Pics}
    }
]