export function getBaseUrl() {
  switch (process.env.VERCEL_ENV) {
    case 'development':
      return 'http://localhost:3000'
    case 'production':
      return `https://${process.env.PRODUCTION_URL}`
    default:
      return `https://${process.env.VERCEL_URL}`
  }
}
