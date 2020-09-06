const chalk = require('chalk');

var sku = [
    'SKU1',
    'SKU2',
    'SKU3'
]
var store = [
    'L1',
    'L2',
    'L3'
]
var tenant = [
    'DP',
    'DL'
]

export function createMock(count: Number) {
    let listMock = [];

    console.log(chalk.underline(` Iniciando... \n`));

    for (let index = 0; index < count; index++) {
        var randomTenant = Math.floor(Math.random() * tenant.length);
        var randomStore = Math.floor(Math.random() * store.length);
        var randomSku = Math.floor(Math.random() * sku.length);

        var string = "{\"tenant\":\"" + tenant[randomTenant] + "\",\"store\":\"" + store[randomStore] + "\",\"sku\":\"" + sku[randomSku] + "\"}|"
            + "{\"id\":{\"tenant\":\"" + tenant[randomTenant] + "\",\"store\":\"" + store[randomStore] + "\",\"sku\":\"" + sku[randomSku] + "\"},"
            + "\"amount\":" + Math.floor(Math.random() * 100) + "}\n"

        listMock.push(string);

    }
    console.log(chalk.underline(` Quantidade de linhas: ${listMock.length} \n`))
    console.log(chalk.underline(` Lista Criada \n`));

    return listMock;
}