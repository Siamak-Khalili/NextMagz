import Sidebar from "./Sidebar";
import FilterButton from "./FilterButton";

function ResponsiveSidebar() {
  return (
    <>
      <aside className="hidden lg:flex lg:col-span-1 flex-col">
        <Sidebar />
      </aside>

      <FilterButton>
        <Sidebar />
      </FilterButton>
    </>
  );
}

export default ResponsiveSidebar;
