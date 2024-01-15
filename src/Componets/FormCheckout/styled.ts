import styled from "styled-components";

interface imageProps {
    src: string
}


export const StyledForm = styled.form`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 50px;
width: 100%;
max-width: 750px;
padding: 20px;

@media (max-width: 750px) {
        gap: 16px;
    }

.container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 85px ;

    @media (max-width: 750px) {
        flex-direction: column;
        gap: 10px;
    }

    div{
        width: 100%;
    }


}

.container-date{
    display: flex;
    justify-content: space-between;
    width: 100%;
    @media (max-width: 750px) {
        flex-direction: column;
        gap: 10px;
    }
}

.top-container{
    display: flex;
    gap: 20px;

    @media (max-width: 515px) {
        flex-direction: column;
        gap: 10px;
        
    }
}

.information-passengers{
    width: 100%;
    color: var(--gray--color);

    h2{
        font-weight: 700;
    font-size: 1.6rem;
    }
}

.top-passengers{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 200px;
    

    

    button{
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border-radius: 50%;
        width: 25px;
        height: 25px;
        font-size: 27px;
        font-weight: 700;
        background-color: var(--gren--weak--color);
        color: var(--grenn--color);
        border: none;
        
        &:hover{
            background-color: var(--light--gray);
            color: var(--light--gray--600);
        }

    }

    
}


.passengers{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border: 2px solid var( --light--gray--700);
    width: 104px;
    height: 104px;
    gap: 2px;
    border-radius: 20px;
    

    p{
        color: var(--light--gray--600);
        font-weight: 700;
        font-size: 1.5rem;

    }

    

    span{
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--grenn--color   );
        font-size: 3.2rem;
        font-weight: 700;
        
    }
}

.button-checkout{
    width: 195px;
    height: 58px;
    background-color: var(--gray--color);
    border: none;
    border-radius: 6px;
    color: var(--white--color);
    font-weight: 700;
    font-size: 2rem;
    margin-top: 20px;

    &:hover{
        background-color: var(--gren--weak--color);
        color: var(--grenn--color);
      
    }
}

.error-message{
    color: red;
}

`

export const StyledMain = styled.main`
display: flex;
align-items: center;
justify-content: center;

`

export const StyledInput = styled.input<imageProps> `
width: 317px;
height: 54px;



`