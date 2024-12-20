import FooterFront from "~/components/footers/FooterFront";
import HeaderFront from "~/components/headers/HeaderFront";

function FrontLayout( children: React.ReactNode) {
  return (
    <>
      <HeaderFront />

      <main>
        {children}
      </main>

      <FooterFront />
    </>
  );
}

export default FrontLayout;