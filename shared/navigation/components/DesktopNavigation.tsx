/*
 * Copyright (c) 2026 Ecolely. All rights reserved.
 * Unauthorized copying, modification, distribution, or use of this software is strictly prohibited.
 */

import { navigationItems } from '../navigation.config';
import NavigationItem from './NavigationItem';

export default function DesktopNavigation() {
  return (
    <nav className="hidden md:flex items-center gap-8">
      {navigationItems
        .filter((item) => item.enabled)
        .map((item) => (
          <NavigationItem key={item.href} item={item} />
        ))}
    </nav>
  );
}
