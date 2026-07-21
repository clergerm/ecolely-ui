/*
 * Copyright (c) 2026 Ecolely. All rights reserved.
 * Unauthorized copying, modification, distribution, or use of this software is strictly prohibited.
 */

export default function Footer() {
  return (
    <footer
      className="
                border-t
                py-8
                text-center
                text-sm
                text-gray-500
            "
    >
      © {new Date().getFullYear()} Ecolely. All rights reserved.
    </footer>
  );
}
