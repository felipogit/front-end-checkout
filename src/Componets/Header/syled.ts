import styled from "styled-components";

export const StyledHeader = styled.header`
background-image: url('../src/assets/Vector.svg');
background-size: cover;
background-position: center;
background-repeat: no-repeat;
width: 100%;
height: 200px;
display: flex;
align-items: center;
justify-content: center;



div {
    display: flex;
    flex-direction: column;
    gap: 5px;

    h1 {
    
        font-size: 4rem;
        color: var(--white--color);
        font-weight: 700;
    }
    h3 {
        color: var(--white--color);
        font-size: 2rem;
        font-weight: 500;
        max-width: 361px;
       
    }
}


`