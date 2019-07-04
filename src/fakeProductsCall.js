import {get} from './api'

export const getProducts = () => {
  return new Promise(async (resolve, reject) => {
    const x = await get('./products.json')
    console.log(x)
  })
}
