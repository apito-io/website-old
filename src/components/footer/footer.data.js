import Chat from 'assets/widget/chat.svg';
import Community from 'assets/widget/community.svg';
import Github from 'assets/widget/github.svg';

export default {
  widgets: [
    {
      id: 1,
      iconSrc: Chat,
      altText: 'Community',
      title: 'Join the Community',
      description: <span>Our Team is always active on our <b>Slack Channel.</b> Ask your Questions, Join the discussions and much more</span>,
    },
    {
      id: 2,
      iconSrc: Community,
      altText: 'Chat',
      title: 'Chat Communication',
      description: <span>If you have any further queries aobut our platform, please leave a message at <b>the messenger</b> (bottom right)</span>,
    },
    {
      id: 3,
      iconSrc: Github,
      altText: 'Github',
      title: 'Github Access',
      description: <span>We share Projects, Codes & Documentation for Apito Projects at our <b>Github Account.</b> Do check it out.</span>,
    },
  ],

  menuItem: [
    {
      scrollPath: 'home',
      path: '',
      label: 'Home',
    },
    {
      scrollPath: 'feature',
      path: '#feature',
      label: 'Features',
    },
    {
      scrollPath: 'why',
      path: '#why',
      label: 'Why?',
    },
    {
      scrollPath: 'pricing',
      path: '#pricing',
      label: 'Pricing',
    },
    {
      path: 'faq',
      label: 'FAQ',
    },
    // {
    //   path: 'aup',
    //   label: 'AUP',
    // },
  ],
  policyMenuItem : [
    {
      path: 'privacy-policy',
      label: 'Privacy Policy',
    },
    {
      path: 'user-agreement',
      label: 'User Agreement',
    },
  ]
};
