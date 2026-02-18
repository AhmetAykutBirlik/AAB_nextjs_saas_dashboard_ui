import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { RevenueChart } from "@/components/dashboard/RevenueChart";

export default function AnalyticsPage() {
    return (
        <div className="flex h-screen bg-background text-foreground overflow-hidden">
            <div className="hidden md:flex w-72 flex-col fixed inset-y-0 z-50">
                <Sidebar />
            </div>
            <main className="md:pl-72 flex-1 h-full overflow-y-auto">
                <Header />
                <div className="flex-1 space-y-4 p-8 pt-6">
                    <div className="flex items-center justify-between space-y-2 mb-6">
                        <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
                    </div>
                    <div className="w-full h-[500px]">
                        <RevenueChart />
                    </div>
                </div>
            </main>
        </div>
    );
}
