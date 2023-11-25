"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { IconType } from "react-icons";
import qs from "query-string";

interface CategoryBoxProps {
  label: string;
  icon: IconType;
  selected?: boolean;
}

const Category: React.FC<CategoryBoxProps> = ({
  label,
  icon: Icon,
  selected,
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    if (label === "Todos los productos") {
      router.push("/");
    } else {
      let currentQuery = {};

      if (params) {
        currentQuery = qs.parse(params.toString());
      }

      const updatedQuery: any = {
        ...currentQuery,
        category: label,
      };

      const url = qs.stringifyUrl(
        {
          url: "/",
          query: updatedQuery,
        },
        { skipNull: true }
      );

      router.push(url);
    }
  }, [label, params, router]);

  return (
    <div
      onClick={handleClick}
      className={`flex items-center justify-center text-center gap-1 p-2 border-b-4 hover:text-green-400 transition cursor-pointer ${
        selected ? "border-b-green-400" : "border-transparent"
      }
      ${selected ? "text-green-400" : "text-white"}
      `}
    >
      <Icon size={20} />
      <div className="font-medium text-sm">{label}</div>
    </div>
  );
};

export default Category;
