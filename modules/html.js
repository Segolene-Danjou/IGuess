module.exports = {

    getStartStr: (proposition) => `<p>Bienvenue ! Veuillez choisir un nombre entre 0 et 100</p> <br> <p>Je propose ${proposition}, est-ce (/plus, /moins ou /bravo) ?</p>`,

    getPlusStr: (proposition) => `<p>ok c'est plus, donc je propose ${proposition}</p>`,

    getMoinsStr: (proposition) => `<p>ok c'est moins, donc je propose ${proposition}</p>`,

    header: `
        <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>La fourchette à l'envers</title>
            </head>
            <body>
    `,

    footer: `
        <script src="/js/script.js"></script>
        </body>
        </html>
    `,

    mainActions: `
        <button id="less">moins</button> - 
        <button id="win">bravo</button> - 
        <button id="more">plus</button>
    `,

    replayActions: `
        <button id="replay">Rejouer</button>
    `,

    cheater: `<p>ça sent la triche !</p>`,

    bravo: `<p>Super je suis trop fort !!</p>`,

    error404: `<p>Vous êtes perdu ?</p>`

};