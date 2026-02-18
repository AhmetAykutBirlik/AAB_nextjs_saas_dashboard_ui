import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export default function SettingsPage() {
    return (
        <div className="flex h-screen bg-background text-foreground overflow-hidden">
            <div className="hidden md:flex w-72 flex-col fixed inset-y-0 z-50">
                <Sidebar />
            </div>
            <main className="md:pl-72 flex-1 h-full overflow-y-auto">
                <Header />
                <div className="flex-1 space-y-4 p-8 pt-6">
                    <div className="flex items-center justify-between space-y-2 mb-6">
                        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
                    </div>

                    <div className="grid gap-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Appearance</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-medium">Theme Preferences</p>
                                        <p className="text-sm text-muted-foreground">Customize how the dashboard looks on your device.</p>
                                    </div>
                                    <button className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md">Customize</button>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Account</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-medium">Profile Settings</p>
                                        <p className="text-sm text-muted-foreground">Manage your personal information and security.</p>
                                    </div>
                                    <button className="px-4 py-2 text-sm font-medium border rounded-md hover:bg-muted">Manage</button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    );
}
