import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Image from "next/image";
/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <span className="inline-flex text-[15px] items-center font-medium gap-1">
        <Image src="/logo.png" alt="광덕방범대" width={24} height={24} />
        광덕방범대
      </span>
    ),
  },
  githubUrl: "https://github.com/Gwangdeok",
  // see https://fumadocs.dev/docs/ui/navigation/links
  links: [],
};
