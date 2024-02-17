import { computed, ref } from 'vue'
import * as yup from 'yup'
import { useForm } from 'vee-validate'
import parse from 'date-fns/parse'

export default () => {
    const currentStepIndex = ref(0)
    const stepCounter = ref(0)

    const schemas = [
        yup.object({
            email: yup.string().email().required()
        }),
        yup.object({
            password: yup.string().min(8).required(),
            confirmPass: yup
                .string()
                .min(8)
                .required()
                .oneOf([yup.ref('password')])
        }),
        yup.object({
            name: yup.string().required()
        }),
        yup.object({
            sex: yup.string().required()
        }),
        yup.object({
            birthday: yup
                .date()
                .transform(function (value, originalValue) {
                    if (this.isType(value)) {
                        return value
                    }
                    const result = parse(
                        originalValue,
                        'dd.MM.yyyy',
                        new Date()
                    )
                    return result
                })
                .typeError('Пожалуйста, введите правильную дату')
                .required()
                .min('1950-11-13', 'Не ранее 1950г')
                .max('2003-11-13', 'Приходите когда будете совершенолетним :)')
        })
    ]

    const currentSchema = computed(() => schemas[currentStepIndex.value])

    const isLastStep = computed(
        () => currentStepIndex.value === stepCounter.value - 1
    )

    const { values, handleSubmit } = useForm({
        validationSchema: currentSchema,
        keepValuesOnUnmount: true
    })

    return { currentStepIndex, stepCounter, isLastStep, values, handleSubmit }
}
