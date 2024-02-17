import * as yup from 'yup'
import { useForm } from 'vee-validate'
import { useAuthStore } from '@/stores'
import { parse, format } from 'date-fns'
import de from 'date-fns/locale/de'
import transformSex from '../utils/transfromSex'

export default () => {
    const authStore = useAuthStore()
    const userId = authStore.user.id

    const schemas = yup.object({
        name: yup.string().required(),
        phone: yup.string(),
        email: yup.string().email().required(),
        birthday: yup
            .date()
            .transform(function (value, originalValue) {
                if (this.isType(value)) {
                    return value
                }
                const result = parse(originalValue, 'dd.MM.yyyy', new Date())
                return result
            })
            .typeError('Пожалуйста, введите правильную дату')
            .required()
            .min('1950-11-13', 'Не ранее 1950г')
            .max('2003-11-13', 'Упс, приходите когда вас исполнится 18 :)'),
        city: yup.string()
    })

    const { values, handleSubmit } = useForm({
        validationSchema: schemas,
        initialValues: {
            email: authStore.user?.email || '',
            name: authStore.user?.name || '',
            phone: authStore.user?.phone || '',
            birthday:
                format(new Date(authStore.user?.birthday), 'dd.MM.yyyy', {
                    locale: de
                }) || '',
            city: authStore.user?.city || '',
            sex: transformSex(authStore.user?.sex) || ''
        }
    })

    return { values, handleSubmit, userId }
}
