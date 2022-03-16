const { WAConnection } = require("@adiwajshing/baileys")
const chalk = require('chalk')
const fs = require("fs")
const exec = require('child_process')

const samu330 = new WAConnection()
exports.samu330 = samu330

exports.connect = async() => {
    samu330.version = [2, 2143, 3]
    console.log(chalk.keyword("blue")('â—¦ Conectando â—¦'))
    let auth = './Samu330.json'
    samu330.logger.level = 'warn'
    samu330.on("qr", () => {
        console.log(chalk.keyword("yellow")('ðŸ’Ž   Escanea el codigo...'))
    })
    fs.existsSync(auth) && samu330.loadAuthInfo(auth)
    samu330.on('connecting', () => {
        console.log(chalk.whiteBright("âŒ›"), chalk.keyword("red")("â–¡ Estado de NyanBot"), chalk.keyword("aqua")("Connecting..."))
    })
        samu330.on('open', () => {
        console.log(chalk.keyword("green")('â•’â•â•â• '), chalk.keyword("blue")('âŒˆ '), chalk.keyword("aqua")('CONECTADO'), chalk.keyword("blue")(' âŒ‰'), chalk.keyword("green")(' â•â•â•'))
        console.log(chalk.keyword("green")("â”œ"), chalk.keyword("aqua")("WA Version : "), chalk.whiteBright(samu330.user.phone.wa_version))
        console.log(chalk.keyword("green")("â”œ"), chalk.keyword("aqua")("OS Version : "), chalk.whiteBright(samu330.user.phone.os_version))
        console.log(chalk.keyword("green")("â”œ"), chalk.keyword("aqua")("Device : "), chalk.whiteBright(samu330.user.phone.device_manufacturer))
        console.log(chalk.keyword("green")("â”œ"), chalk.keyword("aqua")("Model : "), chalk.whiteBright(samu330.user.phone.device_model))
        console.log(chalk.keyword("green")("â”œ"), chalk.keyword("aqua")("OS Build Number : "), chalk.whiteBright(samu330.user.phone.os_build_number))
        console.log(chalk.keyword("green")("â”‚"), chalk.keyword("red")('â•­â•¼â•¼â•¼â•¼â•¼â•¼â•¼â•¼â•¼â•¼â•¼â•¼â•¼â•¼â•¼â•¼â•¼â•¼â•¼â•¼â•¼â•¼â•¼â•¼â•®'))
        console.log(chalk.keyword("green")("â”‚"), chalk.keyword("red")('â”‚'), chalk.keyword("yellow")('       BIENVENIDO'))
        console.log(chalk.keyword("green")("â”‚"), chalk.keyword("red")('â”‚'), chalk.keyword("aqua")(' Creditos:'))
        console.log(chalk.keyword("green")("â”‚"), chalk.keyword("red")('â”‚'), chalk.keyword("magenta")(' Samu330 | MankBarBar'))
        console.log(chalk.keyword("green")("â”‚"), chalk.keyword("red")('â•°â•¼â•¼â•¼â•¼â•¼â•¼â•¼â•¼â•¼â•¼â•¼â•¼â•¼â•¼â•¼â•¼â•¼â•¼â•¼â•¼â•¼â•¼â•¼â•¼â•¯'))
        const authInfo = samu330.base64EncodedAuthInfo()
        fs.writeFileSync(auth, JSON.stringify(authInfo, null, '\t'))
    })
    await samu330.connect({ timeoutMs: 30 * 1000 })
    return samu330
}
