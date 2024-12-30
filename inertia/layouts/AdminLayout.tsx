import { Link } from "@inertiajs/react";
import HeaderAdmin from "~/components/headers/HeaderAdmin";
import FooterAdmin from "~/components/footers/FooterAdmin";

function AdminLayout(children: React.ReactNode) {
  return (
    <div className="flex flex-col">
      <HeaderAdmin />

      <main className='flex-1'>
        <div className="drawer lg:drawer-open lg:h-[calc(100vh-4rem)]">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center p-4">
            {children}
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
              Open drawer
            </label>
          </div>
          <div className="drawer-side h-full">
            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
              <a href="/" target="_blank" className="btn btn-ghost hover:bg-transparent hover:underline">Front page</a>
              <Link href="/admin/dashboard" className="btn btn-ghost hover:bg-transparent hover:underline">Dashboard</Link>
              <Link href="/admin/books" className="btn btn-ghost hover:bg-transparent hover:underline">Books</Link>
              <Link href="" className="btn btn-ghost hover:bg-transparent hover:underline">Sidebar Item 2</Link>
              <Link href="" className="btn btn-ghost hover:bg-transparent hover:underline">Sidebar Item 1</Link>
              <Link href="" className="btn btn-ghost hover:bg-transparent hover:underline">Sidebar Item 2</Link>
              <Link href="" className="btn btn-ghost hover:bg-transparent hover:underline">Sidebar Item 1</Link>
              <Link href="" className="btn btn-ghost hover:bg-transparent hover:underline">Sidebar Item 2</Link>
              <Link href="" className="btn btn-ghost hover:bg-transparent hover:underline">Sidebar Item 1</Link>
              <Link href="" className="btn btn-ghost hover:bg-transparent hover:underline">Sidebar Item 2</Link>
            </ul>
          </div>
        </div>
      </main>
      
      <FooterAdmin />
    </div>
  );
}

export default AdminLayout;