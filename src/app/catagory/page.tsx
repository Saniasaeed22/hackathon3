import CarCards from "@/components/CarCards";
import PickDrop from "@/components/pickDrop";
import Filters from "@/components/filters";

export default function Catagory() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar (hidden on small screens) */}
      <aside className="hidden md:block md:w-1/4 h-screen p-4 bg-gray-100">
        <Filters />
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col p-5 pt-11">
        <PickDrop />

        {/* CarCards Section */}
        <section className="p-6 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6 flex-1">
          <CarCards />
        </section>
      </main>
    </div>
  );
}
