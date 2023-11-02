// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app:{
    head: {
      charset:'utf-8',
      title: "PRACTICE_JLCA",
      meta: [
        {name: "viewport",content:"width=device-width, initial-scale=1.0"},
        {name: "description",content:"日本ライブコマース協会です"},
        { name: 'format-detection', content: 'telephone=no' },
      ],
    },
  },
  components: {
    global: true,
    dirs  : ['~/components'],
  },
  css: [
    '@acab/reset.css',
    '~/assets/scss/base.scss',
  ],
})
