export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '6098f8eb3958776432e2d76c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-t227t5z6',
                  apiId: 'fc2bea7f-c6ad-4025-a521-be2053bcad5c'
                },
                {
                  buildHookId: '6098f8eb62bf915f0407f08e',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-g566hwi6',
                  apiId: '566cbe99-8caa-4e5b-91d0-0dc32f4f5af5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/abcde-source/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-g566hwi6.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
