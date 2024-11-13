import axios, { AxiosResponse } from 'axios'

interface ApiCoin {
  coin: {
    name: string
    symbol: string
  }
  start_date: string
  description: string
}

interface ApiResponse {
  data: ApiCoin[]
}

async function getUpcomingCoins(): Promise<ApiResponse | null> {
  let response = null
  new Promise(async (resolve, reject) => {
    try {
      response = await axios.get(
        'https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
        {
          headers: {
            'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c',
            "Access-Control-Allow-Origin": "*"
          }
        }
      )
    } catch (ex) {
      response = null
      // error
      console.log(ex)
      reject(ex)
    }
    if (response) {
      // success
      return response.data
    }
  })
  return null;
}

export default getUpcomingCoins