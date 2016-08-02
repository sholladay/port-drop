'use strict';

const tcpBind = require('tcp-bind');
const rootCheck = require('root-check');

const allocate = (input) => {
    const fd = {};
    Object.keys(input).forEach((key) => {
        fd[key] = tcpBind(input[key]);
    });

    rootCheck();

    return fd;
};

module.exports = {
    allocate
};
