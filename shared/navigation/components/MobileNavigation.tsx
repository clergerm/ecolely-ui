/*
 * Copyright (c) 2026 Ecolely. All rights reserved.
 * Unauthorized copying, modification, distribution, or use of this software is strictly prohibited.
 */

import { navigationItems } from '../navigation.config';
import NavigationItem from './NavigationItem';

interface Props {
  onNavigate: () => void;
}

export default function MobileNavigation({ onNavigate }: Props) {
  return (
    <nav className="absolute left-0 top-full w-full border-t bg-white shadow-lg px-6 py-4 md:hidden">
      <div className="flex flex-col gap-4">
        {navigationItems
          .filter((item) => item.enabled)
          .map((item) => (
            <NavigationItem key={item.href} item={item} onClick={onNavigate} />
          ))}
      </div>
    </nav>
  );
}
