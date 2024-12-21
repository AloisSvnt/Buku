import HeaderAdmin from "~/components/headers/HeaderAdmin";
import FooterAdmin from "~/components/footers/FooterAdmin";

function AdminLayout(children: React.ReactNode) {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderAdmin />

      <main className='flex-1 grid grid-cols-[300px_minmax(900px,_1fr)]'>
        <div className="pl-2">left</div>
        {children}
      </main>
      
      <FooterAdmin />
    </div>
  );
}

export default AdminLayout;