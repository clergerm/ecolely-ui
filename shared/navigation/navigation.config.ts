/*
 * Copyright (c) 2026 Ecolely. All rights reserved.
 * Unauthorized copying, modification, distribution, or use of this software is strictly prohibited.
 */

import { NavigationItem } from './types/navigation';

export const navigationItems: NavigationItem[] = [
  {
    label: 'Learn',
    href: '/',
    enabled: true,
  },
  {
    label: 'Courses',
    href: '/courses',
    enabled: true,
  },
  {
    label: 'Features',
    href: '/features',
    enabled: false,
  },
  {
    label: 'Solutions',
    href: '/solutions',
    enabled: false,
  },
  {
    label: 'About',
    href: '/about',
    enabled: true,
  },
  {
    label: 'Account',
    href: '/account',
    enabled: true,
  },
];
