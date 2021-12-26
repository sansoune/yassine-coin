import arg from 'arg'

function passeArgIntoOptions(rawargs) {
    const args = arg(
        {
            '--yes': Boolean,
            '-y': '--yes'
        }, 
        {
            argv: rawargs.slice(2)
        }
    )
    return{
        skiPrompt: args['--yes'] || false,
        template: args._[0]
    }
}

export function cli(args) {
    let options = passeArgIntoOptions(args)
    console.log(options)
}