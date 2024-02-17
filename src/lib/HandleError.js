import { useAppToast } from '@/modules/AppToast'

export default class HandleError extends Error {
    status
    errors

    constructor(status, message, errors=[]) {
        super(message)

        this.status = status
        this.errors = errors
    }

    static ShowToast(message) {
        const appToast = useAppToast()

        appToast.isMessageShown = true

        appToast.content = message
        appToast.type = 'error'

        appToast.autoCloseMessage()

        const success = false

        return {
            success
        }
    }
}
