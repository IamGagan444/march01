import React from "react";

const Books = ({ params }: { params: { books: string[] } }) => {
  if (params?.books?.length === 2) {
    return (
      <h1>
        viewing documents for books : {params?.books[0]} and books chapter :
        {params?.books[1]}
          <br />
          because you have put two parameters in your url link show first one is books and second one is chapters
      </h1>
    );
  } else if (params?.books?.length === 1) {
    return <h1>viewing documents for books : {params?.books[0]}</h1>;
  }

  return <h3>this is the home books:</h3>;
};

export default Books;
