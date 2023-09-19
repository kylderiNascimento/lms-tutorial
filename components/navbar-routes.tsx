"use client";

import { UserButton } from "@clerk/nextjs";

export const NavBarRoutes = () => {
    return (
        <div className="flex gap-x-2 ml-auto">
            <UserButton />
        </div>
    )
}