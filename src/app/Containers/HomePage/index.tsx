import React from "react"
import styled from "styled-components"
import tw from "twin.macro"
import BookCard from "../../Components/BookCard"
import { Marginer } from "../../Components/Marginer"
import NavBar from "../../Components/Navbar"
import  TopSection  from "./TopSection"

const PageContainer = styled.div`
  ${tw`flex flex-col w-full h-full items-center overflow-x-hidden`}
`

export function HomePage() {
  return (
    <PageContainer>
      <NavBar />
      <TopSection />
      <Marginer direction="vertical" margin="4em"/>
      <BookCard />
    </PageContainer>
  )
}
