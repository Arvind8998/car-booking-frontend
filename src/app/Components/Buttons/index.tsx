import React from "react"
import styled from "styled-components"
import tw from "twin.macro"

interface IButtonProps {
  theme?: "filled" | "outlined"
  text: string
}
const BaseButton = styled.button`
  ${tw`pl-5 pr-5 pt-3 pb-3 rounded-md text-white text-xs md:font-semibold border-transparent border-2 border-solid focus: outline-none transition-all duration-200 ease-in-out m-1`}
`

const OutlinedButton = styled(BaseButton)`
  ${tw`bg-red-500 hover:bg-transparent hover:text-red-500 hover:border-red-500`}
`

const FilledButton = styled(BaseButton)`
  ${tw`border-red-500 text-red-500 bg-transparent hover:text-white hover:bg-red-500 hover:border-transparent`}
`

const Button = (props: IButtonProps) => {
  const { theme, text } = props
  if (theme === "filled") {
    return <FilledButton>{text}</FilledButton>
  } else {
    return <OutlinedButton>{text}</OutlinedButton>
  }
}

export default Button