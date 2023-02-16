// export const fetcher = (url: string) => fetch(url).then(res => res.json())
type FetcherOptions = {
  url: string
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  body?: any
  json?: boolean
}

const fetcher = async ({
  url,
  method = 'GET',
  body = null,
  json = true,
}: FetcherOptions) => {
  const res = await fetch(url, {
    method,
    // body: json ? JSON.stringify(body) : body,
    body: body && JSON.stringify(body),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })

  if (!res.ok) {
    throw new Error('Api error')
  }

  if (json) {
    const data = await res.json()
    return data.data
  }
  // const headers: any = {}
  // if (json) {
  //   headers['Content-Type'] = 'application/json'
  // }
  // const res = await fetch(url, {
  //   method,
  //   headers,
  //   body: json ? JSON.stringify(body) : body,
  // })
  // return res.json()
}

export const register = async (user: any) => {
  return fetcher({
    url: '/api/register',
    method: 'POST',
    body: user,
    json: false,
  })
}

export const signin = async (user: any) => {
  return fetcher({
    url: '/api/signin',
    method: 'POST',
    body: user,
    json: false,
  })
}

export default fetcher
