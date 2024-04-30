import React from "react";

const ConceptsId = ({
  params,
}: {
  params: { features: string; concepts: string };
}) => {
  return (
    <div>
      this is the features:{params.features}, concepts:{params.concepts}
    </div>
  );
};

export default ConceptsId;
