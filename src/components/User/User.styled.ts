
import styled from "styled-components";
export const Container = styled.div`
    display: flex;
    flex-direction: ${(props: any) => props.flex};
    gap: 1em;
    justify-content: center;
    align-items: center;
    
`

export const NameLabel = styled.label`
    font-size: 2em;
    color: #fe8734;
`

export const Budget = styled.label`
    font-size: 1.7em;
    color: #fe8734;
`