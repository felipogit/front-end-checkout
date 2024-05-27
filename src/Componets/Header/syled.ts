import styled from "styled-components";
import teste from '../../assets/Vector.svg';

export const StyledHeader = styled.header`
background-image: url(${teste});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
width: 100%;
height: 200px;
display: flex;
align-items: center;
justify-content: center;

@media (max-width: 370px) {
    height:150px ;
}

div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    width: 100%;
    height: 100%;

    h1 {
    
        font-size: 4rem;
        color: var(--white--color);
        font-weight: 700;
        padding-left: 20px;
    }
    h3 {
        color: var(--white--color);
        font-size: 1.4rem;
        font-weight: 500;
        max-width: 369px;
        letter-spacing: 2px;
    }

    @media (max-width: 370px) {
        align-items: center;
        h1{
            font-size: 3.5rem;
        }

        h3{
            font-size: 1.1rem;
        }
    }
}


`