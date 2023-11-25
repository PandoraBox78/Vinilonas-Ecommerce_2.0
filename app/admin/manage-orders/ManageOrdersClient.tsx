"use client";

import ActionBtn from "@/app/components/ActionBtn";
import Heading from "@/app/components/Heading";
import Status from "@/app/components/Status";
import { formatPrice } from "@/utils/formatPrice";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Order, User } from "@prisma/client";
import axios from "axios";
import moment from "moment";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import { toast } from "react-hot-toast";
import {
  MdAccessTimeFilled,
  MdDeliveryDining,
  MdDone,
  MdRemoveRedEye,
} from "react-icons/md";

interface ManageOrdersClientProps {
  orders: ExtendedOrder[];
}

type ExtendedOrder = Order & {
  user: User;
};

const ManageOrdersClient: React.FC<ManageOrdersClientProps> = ({ orders }) => {
  const router = useRouter();

  useEffect(() => {
    router.refresh();
  }, []);

  let rows: any = [];

  if (orders) {
    rows = orders.map((order) => {
      // Check if order and order.address are not null
      if (order && order.address) {
        const formattedAddress = `${order.address.line1}, ${order.address.line2}, ${order.address.city}, ${order.address.state}, ${order.address.postal_code}, ${order.address.country}`;
  
        return {
          id: order.id,
          customer: order.user.name,
          amount: formatPrice(order.amount / 100),
          paymentStatus: order.status,
          address: formattedAddress,
          date: moment(order.createdDate).fromNow(),
          deliveryStatus: order.deliveryStatus,
        };
      } else {
        // Handle the case where order or order.address is null
        return {
          id: order.id,
          customer: order.user.name,
          amount: formatPrice(order.amount / 100),
          paymentStatus: order.status,
          address: "N/A", // or any default value
          date: moment(order.createdDate).fromNow(),
          deliveryStatus: order.deliveryStatus,
        };
      }
    });
  }

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 220 },
    { field: "customer", headerName: "Nombre del comprador", width: 130 },
    {
      field: "amount",
      headerName: "Cantidad(MXN)",
      width: 130,
      renderCell: (params) => {
        return (
          <div className="font-bold text-slate-800">{params.row.amount}</div>
        );
      },
    },
    {
      field: "paymentStatus",
      headerName: "Estado del pago",
      width: 130,
      renderCell: (params) => {
        return (
          <div>
            {params.row.paymentStatus === "pending" ? (
              <Status
                text="pendiente"
                icon={MdAccessTimeFilled}
                bg="bg-slate-200"
                color="text-slate-700"
              />
            ) : params.row.paymentStatus === "complete" ? (
              <Status
                text="completado"
                icon={MdDone}
                bg="bg-teal-200"
                color="text-teal-700"
              />
            ) : (
              <></>
            )}
          </div>
        );
      },
    },
    { field: "address", headerName: "Domicilio", width: 220 },
    {
      field: "deliveryStatus",
      headerName: "Proceso de envío",
      width: 130,
      renderCell: (params) => {
        return (
          <div>
            {params.row.deliveryStatus === "pending" ? (
              <Status
                text="pendiente"
                icon={MdAccessTimeFilled}
                bg="bg-slate-200"
                color="text-slate-700"
              />
            ) : params.row.deliveryStatus === "dispatched" ? (
              <Status
                text="despachado"
                icon={MdDeliveryDining}
                bg="bg-purple-200"
                color="text-purple-700"
              />
            ) : params.row.deliveryStatus === "delivered" ? (
              <Status
                text="Entregado"
                icon={MdDone}
                bg="bg-green-200"
                color="text-green-700"
              />
            ) : (
              <></>
            )}
          </div>
        );
      },
    },
    {
      field: "date",
      headerName: "Fecha",
      width: 130,
    },
    {
      field: "action",
      headerName: "Acciones",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="flex justify-between gap-4 w-full">
            <ActionBtn
              icon={MdDeliveryDining}
              disabled={params.row.paymentStatus === "pending"}
              onClick={() => {
                handleDispatch(params.row.id);
              }}
            />
            <ActionBtn
              icon={MdDone}
              disabled={params.row.paymentStatus === "pending"}
              onClick={() => {
                handleDeliver(params.row.id);
              }}
            />
            <ActionBtn
              icon={MdRemoveRedEye}
              onClick={() => router.push(`/order/${params.row.id}`)}
            />
          </div>
        );
      },
    },
  ];

  const handleDispatch = useCallback((id: string) => {
    axios
      .put("/api/order", {
        id,
        deliveryStatus: "dispatched",
      })
      .then((res) => {
        toast.success("Pedido Despachado");
        router.refresh();
      })
      .catch((err) => {
        toast.error("Oops! Algo no funciono...");
        console.log(err);
      });
  }, []);

  const handleDeliver = useCallback((id: string) => {
    axios
      .put("/api/order", {
        id,
        deliveryStatus: "delivered",
      })
      .then((res) => {
        toast.success("Pedido entregado");
        router.refresh();
      })
      .catch((err) => {
        toast.error("Oops! Algo va mal...");
        console.log(err);
      });
  }, []);

  return (
    <div className="max-w-[1450px] m-auto text-xl">
      <div className="mb-4 mt-8">
        <Heading title="Control de pedidos" center />
      </div>
      <div style={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 9 },
            },
          }}
          pageSizeOptions={[9, 20]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </div>
    </div>
  );
};

export default ManageOrdersClient;
