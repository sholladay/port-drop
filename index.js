'use strict';

const
    tcpBind = require('tcp-bind'),
    rootCheck = require('root-check');

function allocate(input) {

    const fd = Object.create(input);

    for (const key in fd) {
        fd[key] = tcpBind(fd[key]);
    }

    rootCheck();

    return fd;
};

module.exports = {
    allocate
};
