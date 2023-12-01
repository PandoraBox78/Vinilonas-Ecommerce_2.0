"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineGoogle } from "react-icons/ai";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import Input from "../components/inputs/Input";
import Button from "../components/Button";
import Heading from "../components/Heading";
import { SafeUser } from "../../types";
import { signIn } from "next-auth/react";
import { yupResolver } from '@hookform/resolvers/yup'; // Importa yupResolver
import * as yup from 'yup'; // Importa yup

interface RegisterUserProps {
  currentUser: SafeUser | null;
}

const schema = yup.object().shape({
  name: yup.string().required('Nombre es obligatorio'),
  email: yup.string().email('Formato de correo electrónico inválido').required('Correo electrónico es obligatorio'),
  password: yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('Contraseña es obligatoria'),
});

const RegisterForm: React.FC<RegisterUserProps> = ({ currentUser }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(schema) as any, // Explicitly cast to 'any' to resolve the type issue
  defaultValues: {
    email: "",
    password: "",
    name: "", // Add the missing 'name' field to defaultValues
  },
  });

  useEffect(() => {
    if (currentUser) {
      router.replace("/cart");
      router.refresh();
    }
  }, []);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/register", data)
      .then(() => {
        toast.success("Cuenta Creada");

        signIn("credentials", {
          email: data.email,
          password: data.password,
          redirect: false,
        }).then((callback) => {
          setIsLoading(false);

          if (callback?.ok) {
            router.replace("/cart");
            toast.success("Sesión iniciada");
          }

          if (callback?.error) {
            toast.error(callback.error);
          }
        });
      })
      .catch(() => toast.error("Oh noooooo un erroooor"))
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (currentUser) {
    return <p className="text-center">Sesión iniciada, Redirigiendo...</p>;
  }

  return (
    <>
      <Heading title="Registrate en Vinilonas E-Commerce" />
      <Button
        outline
        label="Registrate con Google"
        icon={AiOutlineGoogle}
        onClick={() => signIn("google")}
      />
      <hr className="bg-slate-300 w-full h-px" />
      <Input
        id="name"
        label="Nombre"
        disabled={isLoading}
        register={register}
        errors={errors}
        required

      ></Input>
      {errors.name && <p className="text-red-500">{errors.name.message as String}</p>}
      <Input
        id="email"
        label="Correo Electrónico"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="email"
      ></Input>
      {errors.email && <p className="text-red-500">{errors.email.message as string}</p>}
      <Input
        id="password"
        label="Contraseña"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="password"
      ></Input>
      {errors.password && <p className="text-red-500">{errors.password.message as string}</p>}
      <Button
        label={isLoading ? "Cargando..." : "Regístrate"}
        onClick={handleSubmit(onSubmit)}
      />
      <p className="text-sm">
        ¿Ya tienes una cuenta?{" "}
        <Link className="underline" href="/login">
          Inicia sesión
        </Link>
      </p>
    </>
  );
};

export default RegisterForm;
