import Link from "next/link";
import Container from "./Container";
import FooterList from "./FooterList";
import { MdFacebook } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-sky-700 bg-opacity-70 text-slate-200 text-sm mt-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="text-base font-bold mb-2">Servicio al cliente</h3>
            <Link href="mailto:vinilonasecommerce@gmail.com?subject=Necesito%20ayuda%20con...&body=Inserta%20aquí%20tu%20problema%20o%20duda">Contactanos</Link>
            <Link href="/cambios-y-devoluciones">Cambios y devoluciones</Link>
            <Link href="/terminos-y-condiciones">Terminos y condiciones</Link>
          </FooterList>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-base font-bold mb-2">Acerca de nosotros</h3>
            <p className="mb-2">
              Vinilonas de Colima, empresa de origen colimote especializada en la comercialización de lonas y vinilos
            </p>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Derechos Reservados Vinilonas de Colima.
            </p>
          </div>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Siguenos</h3>
            <div className="flex gap-2">
              <Link href="https://www.facebook.com/vinilonasde.colima/">
                <MdFacebook size={24} />
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
