export default (sex) => {
    switch (sex) {
        case 'male':
            return 'Мужской'
        case 'female':
            return 'Женский'
        default:
            return 'Не определено'
    }
}
