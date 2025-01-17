import React from "react";
import { useSelector, useDispatch } from "react-redux";
import labyrinth, { generateGame } from "reducers/labyrinth";
import { 
    CardContainer,
    Content,
    SecondaryText, 
    Action 
} from "./Styles";


const GameScreen = () => {
    const stage = useSelector(store => store.labyrinth.stage);

    const dispatch = useDispatch();

    const onActionSet = (action) => {
        dispatch(generateGame(action));
    }

    const onQuoteRevert = () => {
        dispatch(labyrinth.actions.setPreviousStage());
    }

    return (
        <CardContainer>
            <Content>
                <button type="button" className="nes-btn is-primary" disabled={useSelector(store => !store.labyrinth.history.length)} onClick={onQuoteRevert}>go back</button>
                <SecondaryText className="nes-balloon from-left">Description: {stage.description}</SecondaryText>
                {stage.actions.map(action => (
                    <Action key={action.description} >
                        <p>{action.description}</p>
                        <button type="button" className="nes-btn is-success" onClick={() => onActionSet(action)}>{action.direction}</button>
                    </Action>
                ))}
            </Content>
        </CardContainer>
    )
};

export default GameScreen;
