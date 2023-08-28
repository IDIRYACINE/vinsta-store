

export const isTest = process.env.IS_TEST === undefined ? false : process.env.IS_TEST === 'true'
const isTestUrl = process.env.IS_TEST_URL === undefined ? false : process.env.IS_TEST_URL === 'true'
export const baseUrl = isTestUrl? "http://localhost:3000": 'https://vinstastore.vercel.app'