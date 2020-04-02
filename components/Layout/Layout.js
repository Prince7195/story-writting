import React from 'react';
import { NavBar } from './NavBar';

export const Layout = ({ children }) => {
    return <>
        <NavBar />
        <main className="container">
            {children}
        </main>
    </>;
}