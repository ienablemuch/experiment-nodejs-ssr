import React from 'react';
import { renderToString } from 'react-dom/server';

import express from 'express';
import { html } from '../../html';
import { Counter } from '../containers/Counter';

const port = 3000;
const server = express();

server.use(express.static('dist'));

server.get('/', (req, res) => {
    const body = renderToString(React.createElement(Counter));

    res.send(
        html({
        body
        })
    );
});

server.listen(port, () => console.log('Example app'));

