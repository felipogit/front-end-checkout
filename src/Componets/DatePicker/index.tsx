import { Button, Calendar, CalendarCell, CalendarGrid, DateInput, DateSegment, Dialog, Group, Heading, Popover } from "react-aria-components"
import { StyledCalendar, StyledCalenderCell, StyledDateInput, StyledDatePicker, StyledGroup, StyledHeader, StyledLabel } from "./styled"
import { ComponentProps, forwardRef } from "react"

// export const DatePickerCalender: React.FC<ComponentProps< typeof StyledDatePicker>> = 
export const DatePickerCalender = forwardRef(({ label, ...props }: any, ref:React.ForwardedRef<any>) => {
    return (
        <StyledDatePicker  >
            <StyledLabel>{label}</StyledLabel>
            <StyledGroup >
                <StyledDateInput {...props} ref={ref}  >
                    {(segment) => <DateSegment {...props} ref={ref} segment={segment} />}
                </StyledDateInput>
                <Button  >▼</Button>
            </StyledGroup>
            <Popover {...props} ref={ref}>
                <Dialog>
                    <StyledCalendar >
                        <StyledHeader>
                            <Heading />
                            <div>
                                <Button slot="previous">◀</Button>
                                <Button slot="next">▶</Button>
                            </div>
                        </StyledHeader>
                        <CalendarGrid  >
                            {(date) => <StyledCalenderCell  date={date} />}
                        </CalendarGrid>
                    </StyledCalendar>
                </Dialog>
            </Popover>

        </StyledDatePicker>
    )
})
