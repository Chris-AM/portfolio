export interface NavbarItem {
  name: string;
  path: string;
}

export const doomyNavBarItems: NavbarItem[] = [
  {
    name: 'Home',
    path: '/home',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Projects',
    path: '/projects',
  },
  {
    name: 'Articles',
    path: '/articles',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
];
