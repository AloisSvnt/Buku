import HeaderAdmin from "~/components/headers/HeaderAdmin";
import FooterAdmin from "~/components/footers/FooterAdmin";

function AdminLayout(children: React.ReactNode) {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderAdmin />

      <main className='flex flex-1'>
        {children}
      </main>
      
      <FooterAdmin />
    </div>
  );
}

export default AdminLayout;