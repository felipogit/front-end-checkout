import {Button, Calendar, CalendarCell, CalendarGrid, DateInput, DatePicker, DateSegment, Dialog, Group, Heading, Label, Popover} from 'react-aria-components';
import styled from 'styled-components';

export const StyledDatePicker = styled(DatePicker)`

border: 1px solid var(--light--gray);
border-radius: 6px;
width: 317px;
height: 58px;
padding: 12px;
background-color: var( --white--color--700);

@media (max-width: 750px) {
  width: 100%;
    }

`

export const StyledDateInput = styled(DateInput)`
display: flex;
width: 100%;
color: var(--light--gray--600);
font-weight: 700;
font-size: 1.2rem;


`

export const StyledLabel = styled(Label)`
font-weight: 700;
font-size: 1.2rem;
`

export const StyledGroup = styled(Group)`
display: flex;




`

export const StyledCalendar = styled(Calendar)`
background-color: var( --gray--color);
padding: 0.4em;
cursor: pointer;
color: var(--white--color);





`

export const StyledHeader = styled.header`
display: flex;
justify-content: space-between;
color: var(--white--color);
font-weight: 500;
padding: 10px;

button{
    border: none;
    background-color: transparent;
    color: var(--white--color);
    width: 20px;
    height: 14px;
    
    &:hover {
    background-color: var(--grenn--color);
    border-radius: 30px  ;
  }


}

`

export const StyledCalenderCell = styled(CalendarCell)`
padding: 10px;
color: var(--white--color);

&:hover {
    background-color: var(--grenn--color);
    border-radius: 30px  ;
  }

`

export const StyledButtonCalender = styled(Button)`
border:none;
background-color: transparent;

`