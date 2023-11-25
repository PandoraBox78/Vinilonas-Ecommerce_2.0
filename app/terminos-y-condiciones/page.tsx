import { Container } from "@mui/material";

const terminos = () => {
  return (
    <div className="container mx-auto mt-8 pr-4 pl-4 pb-2 pt-2">
      <h1 className="text-2xl font-semibold mb-4">Términos y Condiciones</h1>

      <p className="mb-4">
        Bienvenido a Vinilonas. Al acceder y utilizar nuestro sitio
        web, aceptas cumplir con los siguientes términos y condiciones. Por
        favor, lee detenidamente antes de continuar con tu compra.
      </p>

      <h2 className="text-xl font-semibold mb-2">Uso del Sitio</h2>
      <p className="mb-4">
        Al utilizar nuestro sitio web, aceptas utilizarlo solo con fines
        legítimos y de acuerdo con estos términos y condiciones. No debes
        realizar ninguna actividad que interfiera o interrumpa el funcionamiento
        normal de nuestro sitio.
      </p>

      <h2 className="text-xl font-semibold mb-2">Información del Usuario</h2>
      <p className="mb-4">
        Al proporcionar información personal a través de nuestro sitio,
        garantizas que la información es precisa, completa y actualizada. Toda
        la información del usuario se procesa de acuerdo con nuestra Política de
        Privacidad.
      </p>

      <h2 className="text-xl font-semibold mb-2">Propiedad Intelectual</h2>
      <p className="mb-4">
        Todo el contenido de nuestro sitio, incluidos textos, gráficos,
        logotipos, imágenes y software, es propiedad exclusiva de [Nombre de tu
        tienda] y está protegido por las leyes de propiedad intelectual.
      </p>

      <h2 className="text-xl font-semibold mb-2">Modificaciones</h2>
      <p className="mb-4">
        Nos reservamos el derecho de modificar estos términos y condiciones en
        cualquier momento. Las modificaciones entrarán en vigencia
        inmediatamente después de ser publicadas en el sitio web. Se recomienda
        revisar periódicamente los términos y condiciones.
      </p>

      <p>
        Si tienes alguna pregunta o inquietud sobre estos términos y
        condiciones, no dudes en ponerte en contacto con nosotros.
      </p>
    </div>
  );
};

export default terminos;
