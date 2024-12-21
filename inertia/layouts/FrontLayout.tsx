import FooterFront from "~/components/footers/FooterFront";
import HeaderFront from "~/components/headers/HeaderFront";

function FrontLayout( children: React.ReactNode) {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderFront />

      <main className='flex flex-1'>
        {children}
      </main>

      <FooterFront />
    </div>
  );
}

export default FrontLayout;