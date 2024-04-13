export function getBaseUrl() {
  console.log('process.env.VERCEL_BRANCH_URL: ', process.env.VERCEL_BRANCH_URL)
  console.log('process.env.VERCEL_URL', process.env.VERCEL_URL)
  console.log('process.env.PRODUCTION_URL', process.env.PRODUCTION_URL)
  console.log('process.env.VERCEL_ENV', process.env.VERCEL_ENV)
  switch (process.env.VERCEL_ENV) {
    case 'development':
      return 'http://localhost:3000'
    case 'production':
      return `https://${process.env.PRODUCTION_URL}`
    default:
      return `https://${process.env.VERCEL_URL}`
  }
}
