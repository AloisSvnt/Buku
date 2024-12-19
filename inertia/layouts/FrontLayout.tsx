import FooterFront from "~/components/footers/FooterFront";
import HeaderFront from "~/components/headers/HeaderFront";

function FrontLayout( children: React.ReactNode) {
  return (
    <div>
      <HeaderFront />

      <main>
        {children}
      </main>

      <FooterFront />
    </div>
  );
}

export default FrontLayout;