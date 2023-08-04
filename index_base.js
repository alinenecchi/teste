const fs = require('fs')
fs.readFile('README_BASE.md', 'utf-8', (err, data) => {
    if (err) {
        throw err;
    }
    const substituicoes = {
        titulo: 'Dynamic Readme',
        listaDeNomes: `- Carlos\n- Ana\n- Sérgio`
    }
    const modificado = data
        .replace(
            /%{.*}/gm,
            e => substituicoes?.[e.slice(2, -1)] || e
        )
    fs.writeFile('README.md', modificado, 'utf-8', (err) => {
        if (err) {
            throw err;
        }
        console.log('✔ Processo finalizado!');
    });
});
