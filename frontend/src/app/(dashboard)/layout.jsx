import Header from "../../components/dashboard/Header";
import SideBar from "../../components/dashboard/SideBar";

export const metadata = {
  title: "پروفایل",
  description: "پروفایل",
};

export default function RootLayout({ children }) {
  return (
    <div className="">
      <div className="grid grid-cols-12 h-screen">
        <aside className="col-span-12  z-50 lg:col-span-3 xl:col-span-2 hidden lg:block">
          <SideBar />
        </aside>
        <div className="col-span-12 lg:col-span-9 xl:col-span-10 h-screen flex flex-col">
          <Header />
          <main className="rounded-tr-3xl p-4 md:p-6 lg:p-10 flex-1 overflow-y-auto">
            <div className="xl:max-w-screen-xl">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}
