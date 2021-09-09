import {
  faCalendarAlt,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState } from "react"
import styled, { css } from "styled-components"
import tw from "twin.macro"
import Button from "../Buttons"
import { Marginer } from "../Marginer"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import { SCREENS } from "../../Responsive"

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
  top: 2em;
  left: 0em;

  ${({ offset }: any) =>
    offset &&
    css`
      left: -6em;
    `};

  @media (min-width: ${SCREENS.md}) {
    top: 3.5em;
    left: -2em;
  }
` as any

const SmallIcon = styled.span`
  ${tw`
text-gray-500 fill-current text-base md:text-base ml-1`}
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
        <SmallIcon>
          <FontAwesomeIcon
            icon={isStartCalendarOpen ? faCaretUp : faCaretDown}
          />
        </SmallIcon>
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
        <SmallIcon>
          <FontAwesomeIcon
            icon={isReturnCalendarOpen ? faCaretUp : faCaretDown}
          />
        </SmallIcon>
        {isReturnCalendarOpen && (
          <DateCalendar offset value={returnDate} onChange={setReturnDate} />
        )}
      </ItemContainer>
      <Marginer direction="horizontal" margin="2em" />
      <Button text="Book your Ride" />
    </CardContainer>
  )
}

export default BookCard
