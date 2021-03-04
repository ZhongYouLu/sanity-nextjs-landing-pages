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
                  buildHookId: '6040e638d8583b22e8703113',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-dsj1mfpb',
                  apiId: 'e91afca4-20a9-479f-b9ec-8dcec74bb815'
                },
                {
                  buildHookId: '6040e6383c683f1dad293eb2',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-agg8bm7n',
                  apiId: '1cbbeed1-9522-4466-a71d-6a444c1e8891'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ZhongYouLu/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-agg8bm7n.netlify.app', category: 'apps'}
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
