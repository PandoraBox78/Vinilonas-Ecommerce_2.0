"use client";

import { Order } from "@prisma/client";
import OrderItem from "./OrderItem";
import Heading from "@/app/components/Heading";
import { formatPrice } from "@/utils/formatPrice";
import Status from "@/app/components/Status";
import { MdAccessTimeFilled, MdDeliveryDining, MdDone } from "react-icons/md";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import moment from "moment";

interface OrderDetailsProps {
  order: Order;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ order }) => {
  const router = useRouter();
  moment.locale("es-MX");

  useEffect(() => {
    router.refresh();
  }, []);

  return (
    <div className="max-w-[1150px] m-auto flex flex-col gap-2">
      <div className="mt-8">
        <Heading title="Detalles del pedido" />
      </div>
      <div>ID de pedido: {order.id}</div>
      <div>
        Total:{" "}
        <span className="font-bold">{formatPrice(order.amount/100)}</span>
      </div>
      <div className="flex gap-2 items-center">
        <div>Estado del pago:</div>
        <div>
          {order.status === "pending" ? (
            <Status
              text="pendiente"
              icon={MdAccessTimeFilled}
              bg="bg-slate-200"
              color="text-slate-700"
            />
          ) : order.status === "complete" ? (
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
      </div>
      <div className="flex gap-2 items-center">
        <div>Dirección de envío:</div>
        <div>
          {order.address ? (
            <div>
              <div>{order.address.line1}, {order.address.line2}, {order.address.city}, {order.address.state}, {order.address.country}, CP:{order.address.postal_code}</div>
            </div>
          ) : (
            <div>No disponible</div>
          )}
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <div>Estado de envío:</div>
        <div>
          {order.deliveryStatus === "pending" ? (
            <Status
              text="pendiente"
              icon={MdAccessTimeFilled}
              bg="bg-slate-200"
              color="text-slate-700"
            />
          ) : order.deliveryStatus === "dispatched" ? (
            <Status
              text="enviado"
              icon={MdDeliveryDining}
              bg="bg-purple-200"
              color="text-purple-700"
            />
          ) : order.deliveryStatus === "delivered" ? (
            <Status
              text="entregado"
              icon={MdDone}
              bg="bg-green-200"
              color="text-green-700"
            />
          ) : (
            <></>
          )}
        </div>
      </div>
      <div>Fecha: {moment(order.createdDate).fromNow()}</div>
      <div>
        <h2 className="font-semibold mt-4 mb-2">Productos ordenados</h2>
        <div
          className="grid
        grid-cols-5
        text-xs
        gap-4
        pb-2
        items-center
        "
        >
          <div className="col-span-2 justify-self-start">PRODUCTO</div>
          <div className="justify-self-center">PRECIO</div>
          <div className="justify-self-center">CANTIDAD</div>
          <div className="justify-self-end">TOTAL</div>
        </div>
        <div>
          {order.products &&
            order.products.map((item) => {
              return <OrderItem key={item.id} item={item} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
