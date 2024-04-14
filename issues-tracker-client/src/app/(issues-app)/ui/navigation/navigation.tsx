"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export type NavProps = {
  id: number;
  title: string;
  path: string;
};
const navItems: NavProps[] = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Issues", path: "/issues" },
  { id: 3, title: "Create", path: "/create" },
];

export default function Navigation() {
  const pathName = usePathname();

  const linkClassName = (path: string): string => {
    return path === pathName ? "border-b-2" : "";
  };
  return (
    <div className="flex flex-col">
      <div className="flex m-4 p-4 gap-4">
        {navItems.map(({ id, title, path }: NavProps) => {
          return (
            <div key={`${Math.random() + id}`} className="p-2">
              <Link className={`link pb-2 ${linkClassName(path)}`} href={path}>
                {title}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
