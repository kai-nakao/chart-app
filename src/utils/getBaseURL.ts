export function getBaseUrl() {
  if (typeof window !== 'undefined')
    // browser should use relative path
    return ''
  console.log(
    'process.env.NEXT_PUBLIC_VERCEL_ENV',
    process.env.NEXT_PUBLIC_VERCEL_ENV,
  )
  console.log('process.env.VERCEL_ENV', process.env.VERCEL_ENV)

  switch (process.env.VERCEL_ENV) {
    case 'preview':
      return `https://${process.env.VERCEL_URL}`
    case 'production':
      return `https://${process.env.PRODUCTION_URL}`
    default:
      return 'http://localhost:3000'
  }
}
