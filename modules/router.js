const express = require('express');

const fourchette = require('./ettehcruof');
const html = require('./html');
const pretty = require('pretty');

const router = express.Router();


router.get('/js/script.js', (request, response) => {
    response.sendFile('/assets/js/script.js', {root: __dirname + '/..'});
});

router.get('/',(request, response) => {
    fourchette.init();
    let body = html.header;
    body += html.getStartStr(fourchette.getProposition());
    body += html.mainActions;
    body += html.footer;
    response.send(pretty(body));
});

router.get('/test.js', (request, response) => {
    response.sendFile('/assets/test.html', {root: __dirname + '/..'});
});

router.get('/plus', (request, response) => {
    fourchette.plus();
    let body = html.header;
    if (fourchette.isCheating()) {
        body += html.cheater;
    } else {
        body += html.getPlusStr(fourchette.getProposition());
        body += html.mainActions;
    }
    body += html.footer;
    response.send(pretty(body));
});

router.get('/moins', (request, response) => {
    fourchette.moins();
    let body = html.header;
    if (fourchette.isCheating()) {
        body += html.cheater;
    } else {
        body += html.getMoinsStr(fourchette.getProposition());
        body += html.mainActions;
    }
    body += html.footer;
    response.send(pretty(body));
});

router.get('/bravo', (request, response) => {
    fourchette.reset();
    let body = html.header;
    body += html.bravo;
    body += html.replayActions;
    body += html.footer;
    response.send(pretty(body));
});

module.exports = router;