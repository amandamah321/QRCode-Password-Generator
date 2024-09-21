import chalk from "chalk";

const mainPrompt = [
    {
        name: "select",
        description: chalk.yellow("Escolha a ferramenta (1- QR Code ou 2- Password)"),
        pattern: /^[1-2]+$/,
        message: chalk.bgRed("Escolha entre 1 e 2"),
        required: true,
    },
]

export default mainPrompt;