export default defineEventHandler(async event => {
  event.context.nuxt ||= {}
  if (event.path.includes('about')) {
    event.context.nuxt.noSSR = true
  }
  event.context.myProject = {
    validated: true
  }
})

declare module 'h3' {
  interface H3EventContext {
    myProject?: {
      validated: true
    }
  }
}
