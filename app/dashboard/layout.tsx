import { DashboardSidebar } from "./_components/DashboardSidebar";
import { TopHeader } from "./_components/TopHeader";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-[#F0F2F5] font-poppins overflow-hidden">
      <DashboardSidebar className="hidden lg:flex" />

      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <TopHeader name="Alex Rahman" role="IT Graduate" initials="AR" />
        <div className="flex-1 overflow-y-auto w-full">
          {children}
        </div>
      </main>
    </div>
  );
}
