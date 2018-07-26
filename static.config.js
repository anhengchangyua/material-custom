export default {
  getSiteData: () => ({
    title: 'M-Custome'
  }),
  getRoutes: async () => [
    {
      path: '/',
      component: 'src/components/Home'
    }
  ]
}
