// import React from 'react';
// import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Home';
import Feels from './Feels';
import Freyja from './Freyja';
import Pets from '@material-ui/icons/Pets';
import HomeSharp from '@material-ui/icons/HomeSharp';
import Favorite from '@material-ui/icons/Favorite';

const Routes = [
    {
        name: 'Home',
        path: '/Home',
        component: {Home},
        icon: HomeSharp
    },
    {
        name: 'Feels',
        path: '/Feels',
        component: {Feels},
        icon: Favorite
    },
    {
        name: 'Freyja',
        path: '/Freya',
        component: {Freyja},
        icon: Pets
    }
]

export default Routes