import styled from 'styled-components/macro';

export const Container = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100%;
`;

export const CardContainer = styled.div`
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
        0px 1px 1px 0px rgba(0, 0, 0, 0.14),
        0px 1px 3px 0px rgba(0, 0, 0, 0.12);
    border-radius: .2rem;
    background: white;
    margin: 0 auto;
    margin-bottom: 20px;
    max-width: 500px;
    font-family: 'Press Start 2P', cursive;
    opacity: 0.6;
    padding: 10px;
`;

export const Title = styled.h1`
    margin-bottom: 1rem;
    font-size: 1.5rem;
    color: hsl(0, 0%, 20%);
`;

export const EndTitle = styled.h1`
    margin-bottom: 1rem;
    font-size: 1rem;
    color: hsl(0, 0%, 20%);
`;

export const SecondaryText = styled.p`
    margin: 1em 0;
    font-size: 1rem;
    color: hsl(0, 0%, 25%);
    border: 5px solid #d4d4d4;
    padding: 10px;
    width: 100%;
`;

export const TitleBar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
`;

export const CoverImage = styled.img`
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: .2rem .2rem 0 0;
`;

export const Content = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
`;

export const Button = styled.button `
    display: flex;
    justify-content: center;
    margin: 1em auto;
` ;

export const Gif = styled.iframe`
    margin: 0;
    border: none;
`;

export const Action = styled.div`
    margin: 1rem 0;
    display: grid;
    justify-items: center;
`;

export const EndGame = styled.div`
    margin: 10px auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    iframe {
        border: none;
    }
`;
