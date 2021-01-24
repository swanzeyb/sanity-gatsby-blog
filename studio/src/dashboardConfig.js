export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '600db711bbfca7e02f79ecac',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-9a5jaajh',
                  apiId: 'c5f33bd6-7504-4f84-a742-8cbf1ed7a1b4'
                },
                {
                  buildHookId: '600db711d04e2f329f1276d0',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ae22ingv',
                  apiId: 'fdfe10f5-70e3-42ad-b3a9-4668f502f9cf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/swanzeyb/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ae22ingv.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
