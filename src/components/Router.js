import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Home';
import Feels from './Feels';
import Freyja from './Freyja';



const routes = [
    {
        name: 'Home',
        path: '/Home',
        component: {Home}
    },
    {
        name: 'Feels',
        path: '/Feels',
        component: {Feels}
    },
    {
        name: 'Freyja',
        path: '/Freya',
        component: {Freyja}
    }
]

export default routes