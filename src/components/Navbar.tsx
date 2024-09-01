"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"#"}>
          <MenuItem
            item="Home"
            active={active}
            setActive={setActive}
          ></MenuItem>
        </Link>
        <MenuItem item="Our Courses" setActive={setActive} active={active}>
          <div className="flex flex-col items-center space-y-4 text-sm">
            <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/courses">Basic Nasheed Theory</HoveredLink>
            <HoveredLink href="/courses">Advanced Composition</HoveredLink>
            <HoveredLink href="/courses">Nasheed Writing</HoveredLink>
            <HoveredLink href="/courses">Nasheed Production</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/contact"}>
          <MenuItem
            item="Contact"
            active={active}
            setActive={setActive}
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
