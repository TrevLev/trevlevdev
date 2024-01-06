"use client"

import { ReactElement, useEffect, useRef, useState } from "react"
import randomBase64 from "@utils/randomBase64"
import TickerTapeText from "./TickerTapeText"

const Base64TickerTape = () => {
  const tickerRef = useRef<HTMLDivElement>(null)

  const [blocks, setBlocks] = useState<ReactElement[]>([])
  
  useEffect(() => {
    if (tickerRef.current !== null) {
      if (tickerRef.current.offsetWidth < window.innerWidth) {
        const base64 = randomBase64()
        setBlocks(blocks => [...blocks, <TickerTapeText key={base64} text={base64} />])
      }
    }
  }, [blocks])
  
  return (
    <div className="flex w-fit font-mono font-bold" ref={tickerRef}>
      {blocks.map((block) => block)}
    </div>
  )
}

export default Base64TickerTape