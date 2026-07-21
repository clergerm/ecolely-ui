/*
 * Copyright (c) 2026 Ecolely. All rights reserved.
 * Unauthorized copying, modification, distribution, or use of this software is strictly prohibited.
 */

'use client';

import { useState } from 'react';

import Logo from './Logo';
import DesktopNavigation from './DesktopNavigation';
import HamburgerButton from './HamburgerButton';
import MobileNavigation from './MobileNavigation';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b relative">
      <div className="flex items-center justify-between px-6 py-4">
        <Logo />

        <DesktopNavigation />

        <HamburgerButton open={open} setOpen={setOpen} />
      </div>

      {open && <MobileNavigation onNavigate={() => setOpen(false)} />}
    </header>
  );
}
