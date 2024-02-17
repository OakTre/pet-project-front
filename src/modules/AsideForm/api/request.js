import { request } from '@/api'

class Request {
    async logout() {
        const { data, success } = await request.post('/auth/logout')

        return data
    }
}

const http = new Request()

export default http
