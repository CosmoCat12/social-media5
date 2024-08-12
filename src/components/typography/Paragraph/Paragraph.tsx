import { ReactNode } from "react"

interface IParagraph {
  children: ReactNode
}

const Paragraph = ({children}: IParagraph) => {
  return (
    <p>{children}</p>
  )
}

export default Paragraph