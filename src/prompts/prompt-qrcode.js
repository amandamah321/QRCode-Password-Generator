import chalk from 'chalk';


const promptQRCode = [
    {
        name: 'link',
        description: chalk.yellow('Digite o link para gerar o QRCode'),
    },
    {
        name: 'type',
        description: chalk.yellow('Escolha o tipo de QRCode 1-NORMAL 2-TERMINAL'),
        pattern: /^[1-2]+$/,
        message: chalk.bgRed('Escolha entre 1 e 2'),
        required: true,
    }
];

export default promptQRCode;