import styled from "styled-components";


export const StyledForm = styled.form`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 50px;
width: 100%;
max-width: 750px;
margin-top: 50px;

.container{
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.top-container{
    display: flex;
    gap: 20px;
}

.top-passengers{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 200px;
    

    h4{
        background-color: var(--light--gray);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border-radius: 50%;
        width: 25px;
        height: 25px;
        color: var(--light--gray--600);
        font-size: 27px;
        font-weight: 700;

    }
}


.passengers{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border: 2px solid var(--gray--color);
    width: 104px;
    height: 104px;
    gap: 2px;
    border-radius: 20px;
}

.passengers-total{
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 104px;
    height: 125px;

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
    }
}

`



export const StyledMain = styled.main`
display: flex;
align-items: center;
justify-content: center;

`