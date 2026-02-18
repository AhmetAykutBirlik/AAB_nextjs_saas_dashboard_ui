import { LucideIcon, BarChart3, Users, CreditCard, Activity, Box, Settings, Home } from "lucide-react";

export type KpiItem = {
    title: string;
    value: string;
    change: string;
    trend: "up" | "down" | "neutral";
    icon: any; // LucideIcon type analog
};

export const kpiData: KpiItem[] = [
    {
        title: "Total Revenue",
        value: "$45,231.89",
        change: "+20.1% from last month",
        trend: "up",
        icon: CreditCard,
    },
    {
        title: "Subscriptions",
        value: "+2350",
        change: "+180.1% from last month",
        trend: "up",
        icon: Users,
    },
    {
        title: "Sales",
        value: "+12,234",
        change: "+19% from last month",
        trend: "up",
        icon: Activity,
    },
    {
        title: "Active Now",
        value: "+573",
        change: "+201 since last hour",
        trend: "up",
        icon: Activity,
    },
];

export const revenueData = [
    { name: "Jan", total: 1200 },
    { name: "Feb", total: 2100 },
    { name: "Mar", total: 1800 },
    { name: "Apr", total: 2400 },
    { name: "May", total: 2800 },
    { name: "Jun", total: 3200 },
    { name: "Jul", total: 4500 },
];

export const recentSales = [
    {
        name: "Olivia Martin",
        email: "olivia.martin@email.com",
        amount: "+$1,999.00",
        avatar: "OM",
    },
    {
        name: "Jackson Lee",
        email: "jackson.lee@email.com",
        amount: "+$39.00",
        avatar: "JL",
    },
    {
        name: "Isabella Nguyen",
        email: "isabella.nguyen@email.com",
        amount: "+$299.00",
        avatar: "IN",
    },
];

export const usersData = [
    { id: 1, name: "Alice Johnson", role: "Admin", status: "Active", lastActive: "2 mins ago" },
    { id: 2, name: "Bob Smith", role: "User", status: "Offline", lastActive: "4 hours ago" },
    { id: 3, name: "Charlie Brown", role: "User", status: "Active", lastActive: "10 mins ago" },
    { id: 4, name: "Diana Prince", role: "Manager", status: "Active", lastActive: "1 min ago" },
    { id: 5, name: "Evan Wright", role: "User", status: "Suspended", lastActive: "2 days ago" },
];
