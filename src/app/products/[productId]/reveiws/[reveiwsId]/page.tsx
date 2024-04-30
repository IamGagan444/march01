import React from "react";
import { notFound } from "next/navigation";

const ReveiwsById = ({
  params,
}: {
  params: { productId: string; reveiwsId: string };
}) => {
  if (parseInt(params.reveiwsId) > 100) {
    notFound();
  }

  return (
    <div>
      Reveiws no {params.reveiwsId}
      <br />
      <br />
      productsId:{params.productId}
    </div>
  );
};

export default ReveiwsById;
