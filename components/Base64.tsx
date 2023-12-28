'use client'

import useRandomBase64 from "@hooks/useRandomBase64"

const Base64 = () => {
  const randomBase64 = useRandomBase64(10)

  return (
    <p>{randomBase64}</p>
  )
}

export default Base64