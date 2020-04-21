import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store;
    $.ajax('/api/session').then((user) => {
        store = configureStore({
            "session": user
        })
        ReactDOM.render(<Root store={store} />, root)
    }, (err) => {
        const store = configureStore();
        ReactDOM.render(<Root store={store} />, root)
    })
})