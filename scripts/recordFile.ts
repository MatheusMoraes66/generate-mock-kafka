import * as fs from 'fs'
const chalk = require('chalk');

export function recordFile(filename: string, content: any) {
    for (var i = 0; i < content.length; i++) {
        fs.appendFile(filename, content[i], (err) => {
            if (err) throw err;
        });
    }
    console.log(chalk.bgGreen.black(`Arquivo ${filename} foi criado com Sucesso.`));
}