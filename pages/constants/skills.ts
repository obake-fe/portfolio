interface Skill {
  name: string
  icon: string // /public に置いた画像パス
  years?: number
  comment?: string
}

interface Category {
  title: string
  skills: Skill[]
}

export const categories: Category[] = [
  {
    title: 'Frontend / UI',
    skills: [
      {
        name: 'React',
        icon: 'react.png',
        years: 5,
        comment: '主にフロント開発で使用'
      },
      {
        name: 'Next.js',
        icon: 'nextjs.png',
        years: 2,
        comment: 'SSG/SSR対応'
      },
      {
        name: 'JavaScript',
        icon: 'javascript.png',
        years: 8,
        comment: ''
      },
      { name: 'Redux', icon: 'redux.png', years: 2 },
      { name: 'TanStack Query', icon: 'tanstack_query.png', years: 2 },
      { name: 'Material UI', icon: 'material-ui.png' },
      { name: 'Chakra UI', icon: 'chakra-ui.png' },
      { name: 'Storybook', icon: 'storybook.png' },
      { name: 'React Hook Form', icon: 'react-hook-form.png' },
      { name: 'Formik', icon: 'formik.png' }
    ]
  },
  {
    title: 'Type & Validation / Data',
    skills: [
      { name: 'TypeScript', icon: 'typescript.png', years: 5 },
      { name: 'Zod', icon: 'zod.png' },
      { name: 'Zodios', icon: 'zodios.png' },
      { name: 'GraphQL', icon: 'graphql.png' },
      { name: 'Relay', icon: 'relay.png' },
      { name: 'GraphQL Yoga', icon: 'graphql-yoga.png' },
      { name: 'Mock Service Worker', icon: 'msw.png' }
    ]
  },
  {
    title: 'Markup & Styling',
    skills: [
      { name: 'HTML', icon: 'html.png' },
      { name: 'SCSS', icon: 'scss.png' },
      { name: 'jQuery', icon: 'jquery.png' },
      { name: 'Tailwind CSS', icon: '/icons/tailwind.png' },
      { name: 'Emotion', icon: '/icons/emotion.png' },
      { name: 'Styled Components', icon: '/icons/styled-components.png' },
      { name: 'Vanilla Extract', icon: '/icons/vanilla-extract.png' }
    ]
  },
  {
    title: 'Testing & CI / QA',
    skills: [
      { name: 'Jest', icon: 'jest.png' },
      { name: 'Vitest', icon: 'vitest.png' },
      { name: 'Cypress', icon: 'cypress.png' },
      { name: 'puppeteer', icon: 'puppeteer.png' },
      { name: 'GitHub Actions', icon: 'github-actions.png' },
      { name: 'CircleCI', icon: 'circleci.png' },
      { name: 'Concourse CI', icon: 'circleci.png' }
    ]
  },
  {
    title: 'Build & Bundler / Tooling',
    skills: [
      { name: 'Vite', icon: '/icons/vite.png', comment: '高速開発環境構築' },
      {
        name: 'Webpack',
        icon: '/icons/webpack.png',
        comment: 'カスタマイズ可能なビルドツール'
      }
    ]
  },
  {
    title: 'Design & Creative Tool',
    skills: [
      { name: 'Figma', icon: 'figma.png' },
      { name: 'Adobe XD', icon: 'scss.png' },
      { name: 'Adobe After Effects', icon: 'jquery.png' },
      { name: 'Adobe Photoshop', icon: 'jquery.png' }
    ]
  },
  {
    title: 'Monitoring & Analytics',
    skills: [
      { name: 'DataDog', icon: 'datadog.png' },
      { name: 'Sentry', icon: 'sentry.png' },
      { name: 'Redash', icon: 'redash.png' },
      { name: 'Amazon CloudWatch', icon: 'cloudwatch.png' }
    ]
  },
  {
    title: 'Backend / Server',
    skills: [
      { name: 'PHP', icon: 'php.png' },
      { name: 'Laravel', icon: 'laravel.png' },
      { name: 'MySQL', icon: 'mysql.png' },
      { name: 'nginx', icon: 'nginx.png' },
      { name: 'Docker', icon: 'docker.png' }
    ]
  }
]
