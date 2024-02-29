import { QueryClient } from '@tanstack/react-query'
import { httpBatchLink } from '@trpc/client'
import { atom } from 'jotai'

import { trpc } from '@/utils/trpc'

export const queryClientAtom = atom(new QueryClient())

function getBaseUrl() {
  if (typeof window !== 'undefined')
    // browser should use relative path
    return ''
  if (process.env.VERCEL_URL)
    // reference for vercel.com
    return `https://${process.env.VERCEL_URL}`
  // assume localhost
  return `http://localhost:${process.env.PORT ?? 3000}`
}
export const trpcClientAtom = atom(() =>
  trpc.createClient({
    links: [
      httpBatchLink({
        url: `${getBaseUrl()}/api/trpc`,
      }),
    ],
  }),
)
