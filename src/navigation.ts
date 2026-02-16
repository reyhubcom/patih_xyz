import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Staking',
      links: [
        {
          text: 'Bitcoin Staking',
          href: getPermalink('/bitcoin/btc.1'),
        },
        {
          text: 'Stake [ ETH ]',
          href: getPermalink('/ethereum/eth.1'),
        },
        {
          text: 'Stake [ MON ]',
          href: getPermalink('/monad/mon.1'),
        },
        {
          text: 'Stake [ SOL ]',
          href: getPermalink('/solana/sol.1'),
        },
      ],
    },
    {
      text: 'Products',
      links: [
        {
          text: 'MEME Coin',
          href: getPermalink('/home/meme'),
        },
        {
          text: 'Bridge Coins',
          href: getPermalink('/home/bridge'),
        },
        
      ],
    },
    {
      text: 'Lending',
      links: [
        {
          text: 'Lend & Borrow',
          href: getPermalink('/home/lending'),
        },
        
      ],
    },
    {
      text: 'Category',
      links: [
        {
          text: 'Spot Trading',
          href: getPermalink(),
        },
        {
          text: 'Perp Trading',
          href: getPermalink('/home/perp'),
        },
        
      ],
    },
    {
      text: 'Widgets',
      href: '#',
    },
  ],
  actions: [{ text: 'EXCHANGE', href: '/home/exchange', target: '' }],
};

export const footerData = {
  links: [
    {
      title: 'Start Staking',
      links: [
        { text: 'Stake [ SUI ]', href: '#' },
        { text: 'Stake [ SEI ]', href: '#' },
        { text: 'Stake [ AKASH ]', href: '#' },
        { text: 'Stake [ OSMO ]', href: '#' },
        { text: 'Stake [ ATOM ]', href: '#' },
        { text: 'Stake [ BNB ]', href: '#' },
        { text: 'All Validators', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="#"> Rey</a> · 2026 Patih.xyz All Rights Reserved.
  `,
};
