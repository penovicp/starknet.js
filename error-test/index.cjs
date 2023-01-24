(async () => {

    const starknet = require('starknet')
    const beta = require('stjs')

    const test = (lib) => {
        const provider = new lib.SequencerProvider({
            baseUrl: 'http://127.0.0.1:5050/',
        })

        provider.getContractAddresses().catch(e => {
            if (!(e instanceof lib.HttpError))
                throw new Error(e)
        })
    }

    test(starknet)
    test(beta)
})()