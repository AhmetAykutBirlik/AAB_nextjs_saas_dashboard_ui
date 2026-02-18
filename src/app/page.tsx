import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { KpiGrid } from "@/components/dashboard/KpiGrid";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { UserTable } from "@/components/dashboard/UserTable";

export default function Home() {
    return (
        <div className="flex h-screen bg-background text-foreground overflow-hidden">
            {/* Sidebar */}
            <div className="hidden md:flex w-72 flex-col fixed inset-y-0 z-50">
                <Sidebar />
            </div>

            {/* Main Content */}
            <main className="md:pl-72 flex-1 h-full overflow-y-auto">
                <Header />
                <div className="flex-1 space-y-4 p-8 pt-6">
                    <div className="flex items-center justify-between space-y-2">
                        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
                    </div>

                    <KpiGrid />

                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                        <div className="col-span-4">
                            <RevenueChart />
                        </div>
                        <div className="col-span-3">
                            <UserTable />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
