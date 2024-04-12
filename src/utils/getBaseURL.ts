export function getBaseUrl() {
  if (typeof window !== 'undefined')
    // browser should use relative path
    return ''

  switch (process.env.VERCEL_ENV) {
    case 'preview':
      return `https://${process.env.NEXT_PUBLIC_VERCEL_ENV}`
    case 'production':
      return `https://${process.env.PRODUCTION_URL}`
    default:
      return 'http://localhost:3000'
  }
}
