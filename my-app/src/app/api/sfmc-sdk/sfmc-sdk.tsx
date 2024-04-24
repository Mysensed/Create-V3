import SDK from 'sfmc-sdk'

const ISFMC_SDK = new SDK(
    {
        client_id: process.env.SMFC_CLIENT_ID,
        client_secret: process.env.SFMC_CLIENT_SECRET,
        auth_url: process.env.SFMC_AUT_URL,
        account_id: process.env.SFMC_ACCOUNT_ID,
    },
    {
        eventHandlers: {
            onLoop: (type: any, accumulator: any) => console.log('Looping', type, accumulator.length),
            onRefresh: (options: any) => console.log('RefreshingToken.', options),
            logRequest: (req: any) => console.log(req),
            logResponse: (res: any) => console.log(res),
            onConnectionError: (ex: { code: any; }, remainingAttempts: any) => console.log(ex.code, remainingAttempts)

        },
        requestAttempts : 1,
        retryOnConnectionError: false
    }
);

export default ISFMC_SDK;