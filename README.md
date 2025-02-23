🛒 Vinilonas E-Commerce
Este proyecto es una aplicación de comercio electrónico para la venta de vinilonas, construido con Next.js, TypeScript, Prisma y MongoDB Atlas. La aplicación está desplegada en Vercel.

🏗️ Tecnologías Utilizadas
Next.js: Framework de React para la creación de aplicaciones web full-stack.
TypeScript: Superset de JavaScript que proporciona tipado estático.
Prisma: ORM para interactuar con la base de datos MongoDB.
MongoDB Atlas: Base de datos NoSQL en la nube.
Vercel: Plataforma de hosting para aplicaciones de Next.js.
Tailwind CSS (opcional): Framework CSS para un diseño rápido y moderno.
🚀 Funcionalidades
Catálogo de productos (vinilonas personalizadas).
Gestión de productos (agregar, editar, eliminar) para administradores.
Carrito de compras con persistencia de datos.
Autenticación de usuarios con NextAuth (registro e inicio de sesión).
Procesamiento de pedidos.
Integración con pasarelas de pago.
🌐 Demo
Puedes ver el sitio en funcionamiento aquí: Vinilonas E-Commerce

🛠️ Instalación Local
Sigue los siguientes pasos para ejecutar el proyecto localmente:

1. Clona el repositorio
bash
Copiar código
git clone https://github.com/usuario/vinilonas-ecommerce.git
cd vinilonas-ecommerce
2. Instala las dependencias
bash
Copiar código
yarn install
# o
npm install
3. Configura las variables de entorno
Crea un archivo .env en la raíz del proyecto con las siguientes variables:

bash
Copiar código
DATABASE_URL="mongodb+srv://<usuario>:<password>@cluster0.mongodb.net/vinilonas?retryWrites=true&w=majority"
NEXTAUTH_SECRET="<clave_secreta>"
NEXTAUTH_URL="http://localhost:3000"
4. Configura Prisma
Genera el cliente Prisma:

bash
Copiar código
npx prisma generate
Aplica migraciones si es necesario:

bash
Copiar código
npx prisma migrate dev
5. Inicia la aplicación
bash
Copiar código
yarn dev
# o
npm run dev
Accede a la aplicación en http://localhost:3000.

📂 Estructura del Proyecto
bash
Copiar código
.
├── prisma              # Configuración de Prisma
│   ├── schema.prisma   # Definición del esquema de la base de datos
├── src
│   ├── pages           # Páginas de Next.js
│   ├── components      # Componentes reutilizables
│   ├── lib             # Lógica de autenticación y utilidades
│   ├── prisma          # Cliente Prisma
│   ├── styles          # Estilos globales (Tailwind CSS)
├── public              # Archivos públicos y estáticos
├── .env                # Variables de entorno
├── next.config.js      # Configuración de Next.js
└── tsconfig.json       # Configuración de TypeScript
📦 Despliegue
Este proyecto está desplegado en Vercel. Puedes desplegar tus cambios ejecutando:

bash
Copiar código
vercel --prod
🔧 Personalización
Prisma: Modifica el esquema en prisma/schema.prisma. Ejecuta npx prisma migrate dev después de realizar cambios.
MongoDB Atlas: Configura correctamente la conexión en el archivo .env.
NextAuth: Personaliza los proveedores de autenticación en src/pages/api/auth/[...nextauth].ts.
