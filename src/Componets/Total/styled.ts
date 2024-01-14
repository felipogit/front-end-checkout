import styled from "styled-components";

export const StyledTotal = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 104px;
    height: 125px;
    @media (max-width: 750px) {
        width: 100%;
        align-items: center;
        justify-content: center;

    }

    h2{
        color: var(--grenn--color);
        font-weight: 700;
        font-size: 1.7rem;
        
    }
    h5{
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--grenn--color);
        background-color: var(--gren--weak--color);
        height: 35px;
        width: 40px;
        font-size: 3.2rem;
        font-weight: 700;
        border-radius: 10px;
    }

    .passengers-value{
        display: flex;
        gap: 6px;
        color: var(--gray--color);
        font-weight: 700;
        font-size: 1.5rem;

    }

`