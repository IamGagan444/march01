import React from 'react'

const FeaturesId = ({params}:{params:{features:string}}) => {
  return (
    <div>
      this is the features {params.features}
    </div>
  )
}

export default FeaturesId
