export const apis = {
    'instruments': '/api/instruments'
}

function getDomainURL(){
    return `${process.env.API_URL}:${process.env.API_PORT}`
}