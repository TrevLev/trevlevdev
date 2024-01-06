const TickerTapeText: React.FC<{ text: string }> = ({ text }) => {
  const styledText = text.split('').map((char, index) => {
    if (/[0-9]/.test(char))
      return <span key={index} className="text-blue-600">{char}</span>
    else if (/[+/]/.test(char))
      return <span key={index} className="text-orange-600">{char}</span>
    else
      return <span key={index}>{char}</span>
    
  })
  
  return (
    <p>{styledText}</p>
  )
}

export default TickerTapeText