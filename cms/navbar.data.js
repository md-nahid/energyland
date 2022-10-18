export const navData = [
  {
    label: 'home',
    path: '/',
  },
  {
    label: 'company',
    path: '/company',
    dropdown: [
      {
        label: 'about us',
        path: '/company/about-us',
      },
      {
        label: 'how it works',
        path: '/company/how-it-works',
      },
      {
        label: 'plans & pricing',
        path: '/company/plans-&-pricing',
      },
      {
        label: 'our team',
        path: '/company/our-team',
      },
      {
        label: 'privacy policy',
        path: '/company/privacy-policy',
      },
    ],
  },
  {
    label: 'services',
    path: '/services',
    dropdown: [
      {
        label: 'service one',
        path: '/services/service-one',
      },
      {
        label: 'service two',
        path: '/services/service-two',
      },
    ],
  },
  {
    label: 'projects',
    path: '/projects',
  },
  {
    label: 'news',
    path: '/news',
  },
  {
    label: 'contact',
    path: '/contact',
  },
];
