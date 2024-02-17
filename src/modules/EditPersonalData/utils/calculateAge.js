export default (birthday) =>
    Math.floor((new Date() - new Date(birthday).getTime()) / 3.15576e+10)
