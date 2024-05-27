import { Button, CalendarGrid, CalendarGridBody, DateSegment, Dialog, Heading, Popover } from "react-aria-components"
import { StyledButtonCalender, StyledCalendar, StyledCalenderCell, StyledDateInput, StyledDatePicker, StyledGroup, StyledHeader, StyledLabel } from "./styled"
import {  forwardRef } from "react"
import calender from "../../assets/calendar.svg"


export const DatePickerCalender = forwardRef(({ fieldName, label, ...props }: any, ref: React.ForwardedRef<any>) => {


    return (
        <StyledDatePicker {...props} ref={ref}  >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                    <StyledLabel>{label}</StyledLabel>
                    <StyledGroup >
                        <StyledDateInput>
                            {(segment) => <DateSegment segment={segment} />}
                        </StyledDateInput>
                    </StyledGroup>
                </div>
                <StyledButtonCalender ><img src={calender} alt="" /></StyledButtonCalender>
            </div>
            <Popover >
                <Dialog>
                    <StyledCalendar >
                        <StyledHeader>
                            <Heading />
                            <div>
                                <Button slot="previous">{'<'}</Button>
                                <Button slot="next">{'>'}</Button>
                            </div>
                        </StyledHeader>
                        <CalendarGrid >
                            <CalendarGridBody>
                                {(date) => <StyledCalenderCell date={date} />}
                            </CalendarGridBody>

                        </CalendarGrid>
                    </StyledCalendar>
                </Dialog>
            </Popover>

        </StyledDatePicker>
    )
})
