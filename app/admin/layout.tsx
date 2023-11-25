import AdminNav from "../components/admin/AdminNav";

export const metadata = {
  title: "Vinilonas de Colima",
  description: "Panel de administrador de la tienda",
};

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AdminNav />
      {children}
    </div>
  );
};

export default AdminLayout;
