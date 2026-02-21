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
          text: 'Mint Coin',
          href: getPermalink('/mint/sol.1'),
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
      text: 'Protocols',
      links: [
        {
          text: 'Ethereum',
          href: getPermalink('/protocol/eth '),
        },
        {
          text: 'Monad',
          href: getPermalink('/protocol/mon'),
        },
        {
          text: 'Solana',
          href: getPermalink('#'),
        },
        {
          text: 'Binance',
          href: getPermalink('#'),
        },
        {
          text: 'All Chains',
          href: getPermalink('/allchain/cross'),
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
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
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
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/arthelokyo/astrowind' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="#"> Rey</a> · 2026 Tutul.xyz All Rights Reserved.
  `,
};
