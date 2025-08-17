import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get('authorization')

  const username = process.env.BASIC_AUTH_USER
  const password = process.env.BASIC_AUTH_PASS

  if (!basicAuth) {
    return new NextResponse('Authentication required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Protected"',
      },
    })
  }

  const authValue = basicAuth.split(' ')[1] || ''
  const [user, pass] = Buffer.from(authValue, 'base64').toString().split(':')

  if (user !== username || pass !== password) {
    return new NextResponse('Authentication failed', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Protected"',
      },
    })
  }

  return NextResponse.next()
}

// 対象パスを指定（全ページの場合は `/`）
export const config = {
  matcher: ['/'],
}
