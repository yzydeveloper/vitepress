import Theme from 'vitepress/theme'
import { registerComponents } from './register-components'
// import { h } from 'vue'
export default {
  ...Theme,
  // Layout() {
  //   return h(Theme.Layout, null, {
  //     'sidebar-bottom': () =>
  //       h('div', { class: 'sponsors' }, [
  //         h(
  //           'a',
  //           {
  //             href: 'https://github.com/sponsors/yyx990803',
  //             target: '_blank',
  //             rel: 'noopener'
  //           },
  //           [h('span', 'Sponsors')]
  //         ),
  //         ...sponsors.map(({ href, src, name }) =>
  //           h(
  //             'a',
  //             {
  //               href,
  //               target: '_blank',
  //               rel: 'noopener',
  //               'aria-label': 'sponsor-img'
  //             },
  //             [h('img', { src, alt: name })]
  //           )
  //         )
  //       ])
  //   })
  // },

  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from createApp()
    // router is VitePress' custom router (see `lib/app/router.js`)
    // siteData is a ref of current site-level metadata.
    // router.go("/docs/")
    registerComponents(app)
  },
}
