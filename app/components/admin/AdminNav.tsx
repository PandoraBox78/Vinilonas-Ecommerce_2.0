"use client";

import Link from "next/link";
import Container from "../Container";
import AdminNavItem from "./AdminNavItem";
import {
  MdDashboard,
  MdDns,
  MdFormatListBulleted,
  MdLibraryAdd,
} from "react-icons/md";
import { usePathname } from "next/navigation";

const AdminNav = () => {
  const pathname = usePathname();

  return (
    <div
      className="
      w-full
      shadow-sm
      top-20
      border-b-[1px]
      pt-4
      pb-4
      bg-pink-600
      "
    >
      <Container>
        <div
          className="
            flex
            flex-row
            items-center
            justify-between
            md:justify-center
            gap-8
            md:gap-12
            overflow-x-auto flex-nowrap
            "
        >
          <Link href="/admin">
            <AdminNavItem
              label="Resumen"
              icon={MdDashboard}
              selected={pathname === "/admin" ? true : false}
            />
          </Link>
          <Link href="/admin/add-products">
            <AdminNavItem
              label="Añadir productos"
              icon={MdLibraryAdd}
              selected={pathname === "/admin/add-products" ? true : false}
            />
          </Link>
          <Link href="/admin/manage-products">
            <AdminNavItem
              label="Control de productos"
              icon={MdDns}
              selected={pathname === "/admin/manage-products" ? true : false}
            />
          </Link>
          <Link href="/admin/manage-orders">
            <AdminNavItem
              label="Control de pedidos"
              icon={MdFormatListBulleted}
              selected={pathname === "/admin/manage-orders"}
            />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default AdminNav;
