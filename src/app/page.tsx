import Dashboard from "@/components/Dashboard";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="rounded-3xl bg-white p-4 grid grid-cols-6 gap-2 h-full">
      <aside className="col-span-1">
        <Sidebar />
      </aside>
      <section className="col-span-5 border-custom-pink">
        <Dashboard />
      </section>
    </main>
  );
}
