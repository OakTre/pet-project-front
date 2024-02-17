export default async function loadLayoutMiddleware(route) {
    const { layout } = route.meta
    const normalizedLayoutName = layout || 'AppLayoutDefault'

    const component = await import(`../../layouts/${normalizedLayoutName}.vue`)
    route.meta.layoutComponent = component.default
}
