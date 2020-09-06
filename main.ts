import * as yargs from 'yargs'
const chalk = require('chalk');
const figlet = require('figlet');

import { control } from './scripts/control';

function init() {
    console.log(
        chalk.red(
            figlet.textSync('Gerador de Mocks', { horizontalLayout: 'full' })
        )
    );
    console.log(
        chalk.bgRed.black(
            'Projeto: Gerador de Mocks Kafka | version: 1.0.0 \n'
        )
    );
    const argv = yargs.options({
        type: {
            alias: 't',
            choices: ['txt', 'json'] as const,
            default: 'json',
            type: 'string',
            description: 'Formato do arquivo'
        },
        count: {
            alias: 'c',
            default: 10,
            type: 'number',
            description: 'Quantidade de linhas escritas'
        },
        filename: {
            alias: 'f',
            default: 'teste',
            type: 'string',
            description: 'Nome do arquivo'
        }
    }).argv;

    control(argv.filename, argv.count, argv.type)
}

init();
