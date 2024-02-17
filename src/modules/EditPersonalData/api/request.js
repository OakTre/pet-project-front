import { request } from '@/api'

class Request {
    async update(id, user) {
        const { data } = await request.put(`/user/${id}`, user)

        return data
    }
}

const http = new Request()

export default http
