import styled from "styled-components";

export const StyledContainerInput = styled.div`
width: 100%;
max-width: 317px;
height: 58px;
background-color: var(--white--color--700);
border: 1px solid var(--light--gray);
border-radius: 6px;
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 10px;
align-items: center;

@media (max-width: 750px) {
    max-width: none;
    width: 100%;
}

label{
    font-weight: 700;
}


input{
    border: none;
    background-color: transparent;
    color: var(--light--gray--600);
    font-weight: 700;
    font-size: 1.2rem;
    
}


div{
    display: flex;
    flex-direction: column;
    gap: 5px;
}

img{
    width: 28px;
    height: 28px;
}

`