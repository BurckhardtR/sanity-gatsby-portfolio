export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '621eb426e95bf6007ddb742f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-6dtgib6r',
                  apiId: '4a256e87-1e75-47cb-97c5-4a9382c8ae70'
                },
                {
                  buildHookId: '621eb426cf3b95007e7d847d',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-soh33vdd',
                  apiId: '8b1e4931-5103-45af-91b8-0a64b9a1a110'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/BurckhardtR/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-soh33vdd.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
