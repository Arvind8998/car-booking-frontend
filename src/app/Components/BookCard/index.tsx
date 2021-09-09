import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState } from "react"
import styled from "styled-components"
import tw from "twin.macro"
import Button from "../Buttons"
import { Marginer } from "../Marginer"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"

const CardContainer = styled.div`
  min-height: 4.3em;
  box-shadow: 0 0 12px -3px rgba(0, 0, 0, 0.4);
  ${tw` flex
    justify-center
    items-center
    rounded-md
    bg-white
    pt-1
    pb-1
    pr-2
    pl-2
    md:pt-2
    md:pb-2
    md:pl-9
    md:pr-9 `}
`

const ItemContainer = styled.div`
  ${tw`flex relative`}
`

const Icon = styled.span`
  ${tw` text-red-500
      fill-current
      text-xs
      md:text-base
      mr-1
      md:mr-3`}
`
const Name = styled.span`
  ${tw` text-gray-600
    text-xs
    md:text-sm
    cursor-pointer
    select-none`}
`
const LineSeperator = styled.span`
  width: 2px;
  height: 2em;
  ${tw`
    bg-gray-300
    mr-2
    ml-2
    md:mr-5
    md:ml-5
  `};
`
const DateCalendar = styled(Calendar)`
  position: absolute;
  max-width: none;
  user-select: none;
  top: 3.4em;
  left: -3em;
`

const BookCard = () => {
  const [startDate, setStartDate] = useState<Date>(new Date())
  const [isStartCalendarOpen, setStartCalendar] = useState(false)
  const [returnDate, setReturnDate] = useState<Date>(new Date())
  const [isReturnCalendarOpen, setReturnCalendar] = useState(false)

  const toggleStartCalendar = () => {
    setStartCalendar(!isStartCalendarOpen)
  }

  const toggleReturnCalendar = () => {
    setReturnCalendar(!isReturnCalendarOpen)
  }

  return (
    <CardContainer>
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleStartCalendar}>Pick Up Date</Name>
        {isStartCalendarOpen && (
          <DateCalendar value={startDate} onChange={setStartDate} />
        )}
      </ItemContainer>

      <LineSeperator />
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleReturnCalendar}>Return Date</Name>
        {isReturnCalendarOpen && (
          <DateCalendar value={returnDate} onChange={setReturnDate} />
        )}
      </ItemContainer>
      <Marginer direction="horizontal" margin="2em" />
      <Button text="Book your Ride" />
    </CardContainer>
  )
}

export default BookCard
