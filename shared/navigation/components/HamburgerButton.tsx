/*
 * Copyright (c) 2026 Ecolely. All rights reserved.
 * Unauthorized copying, modification, distribution, or use of this software is strictly prohibited.
 */

'use client';

import { Menu, X } from 'lucide-react';

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export default function HamburgerButton({ open, setOpen }: Props) {
  return (
    <button
      type="button"
      onClick={() => setOpen(!open)}
      className="rounded-md p-2 md:hidden"
      aria-label="Toggle menu"
    >
      {open ? <X size={28} /> : <Menu size={28} />}
    </button>
  );
}
