import HeaderAdmin from "~/components/headers/HeaderAdmin";
import FooterAdmin from "~/components/footers/FooterAdmin";

function AdminLayout(children: React.ReactNode) {
  return (
    <div>
      <HeaderAdmin />

      <main>
        {children}
      </main>
      
      <FooterAdmin />
    </div>
  );
}

export default AdminLayout;