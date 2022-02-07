const url = process.env.PRINCIPAL_URL
const token = process.env.ACCESS_TOKEN

export function buildRequest(uri) {
  return new Request(`${url}${uri}`, {
    method: 'GET',
    redirect: 'follow'
  })
}