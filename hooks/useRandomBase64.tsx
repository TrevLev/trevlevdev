'use client'

import { useEffect, useState } from "react"

const useRandomBase64 = (length: number) => {
  const [randomBase64, setRandomBase64] = useState('')

  useEffect(() => {
    const generateRandomBase64 = async (): Promise<string> => {
      // Find length for Uint8Array corresponding to desired Base64 length, raised to a multiple of 3 to avoid padding issues
      const binaryLength = Math.ceil(length / 4) * 3

      // Make an array of random values
      const array = new Uint8Array(binaryLength)
      window.crypto.getRandomValues(array)

      // Turn this array into a blob
      const blob = new Blob([array], { type: 'application/octet-stream' })
      const blobData = await blob.arrayBuffer()

      // Turn this blob into a Base64 string
      const base64String = btoa(String.fromCharCode(...new Uint8Array(blobData)));

      return base64String.substring(0, length);
    }

    generateRandomBase64()
      .then(base64String => setRandomBase64(base64String))
      .catch(error => console.error('Error generating random base64 string:', error));
  }, [length])

  return randomBase64
}

export default useRandomBase64