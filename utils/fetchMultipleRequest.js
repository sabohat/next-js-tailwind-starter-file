import axios from 'axios'

export const fetchMultipleRequest = async (requests) => {
    let responseArr
    try {
        responseArr = await Promise.all(
            requests.map(async (request) => {
                const response = request.headers
                    ? await axios({
                          url: request.endpoint,
                          method: request?.method || 'GET',
                          headers: request.headers,
                          ...(request.body && { data: request.body }),
                      })
                    : await axios.get(request)
                return response?.data
            }),
        )
    } catch (error) {
        console.log(error)
    }
    return responseArr
}
