import { buildRequest } from './network'

export async function getData() {
  const request = buildRequest('/category')
  const response = await fetch(request);
  const data = await response.json()
  return data
}