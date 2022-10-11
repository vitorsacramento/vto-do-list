import styled from "styled-components";

type ContainerProps = {
    justifyContent?: string;
    alignItem?: string;
}

export const Wrapper = styled.div<ContainerProps>`
    display: flex;
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItem};
    width: 100%;
    max-width: 1200px;

    @media screen and (max-width: 600px) {
    }

    @media screen and (max-width: 1200px) {
        padding: 0 20px;
    }
`;