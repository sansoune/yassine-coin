import { exec } from 'child_process'


export function cli(args) {
    const argm = args.slice(2)
    if (argm[0] === undefined) {
        exec('curl 127.0.0.1:3000', (err, stdout,stderr) => {
            console.log(stdout)
        })
    }else {
        console.log(argm[0])
    }
}