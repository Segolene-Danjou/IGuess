const express = require('express');
const app = express();

const port = 3000;

const router = require('./modules/router');
app.use(router);

app.listen(port, () => {
    console.log(`Server launched on http://localhost:${port}`);
});
