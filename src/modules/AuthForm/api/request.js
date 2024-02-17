import { request } from '@/api'

class Request {
    async login(user) {
        const { data } = await request.post('/auth/login', user)

        return data
    }
}

const http = new Request()

export default http
