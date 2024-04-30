import {Metadata} from "next";
type Props={
  params:{
    productId:string
  };
}

export const generateMetaData=({params}:Props):Metadata=>{
  return {
  title:`this is the metadata of product details by his id :${params.productId} `,
  description:"flksdfjlskdflksdjflsd"
}
}
const ProductDetails = ({ params }:Props) => {
  return <div>this is our ProductDetails page {params?.productId}</div>;
};

export default ProductDetails;
