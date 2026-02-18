"use client";

import { Bell, Search } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle"; // Adjust import if needed

export function Header() {
    return (
        <header className="flex h-16 items-center border-b px-6 bg-background/50 backdrop-blur-md sticky top-0 z-10 w-full">
            <div className="flex items-center gap-4">
                <span className="font-semibold text-lg text-foreground">Dashboard</span>
            </div>
            <div className="ml-auto flex items-center space-x-4">
                <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <input
                        type="search"
                        placeholder="Search..."
                        className="h-9 w-64 rounded-md border border-input bg-transparent pl-9 text-sm outline-none focus:ring-1 focus:ring-ring"
                    />
                </div>
                <ThemeToggle />
                <button className="relative rounded-full p-2 hover:bg-muted text-muted-foreground transition-colors">
                    <Bell className="h-5 w-5" />
                    <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-background" />
                </button>
                <div className="h-8 w-8 rounded-full bg-slate-200 outline outline-2 outline-offset-2 outline-slate-100 flex items-center justify-center font-semibold text-xs text-slate-600">
                    AAB
                </div>
            </div>
        </header>
    );
}
