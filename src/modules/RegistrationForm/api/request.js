import { request } from '@/api'

class Request {
    async registration(user) {
        const { data } = await request.post('/auth/registration', user)

        return data
    }
}

const http = new Request()

export default http
