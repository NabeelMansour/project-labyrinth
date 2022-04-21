import { createSlice } from "@reduxjs/toolkit";

const labyrinth = createSlice({
    name: "labyrinth",
    initialState: {
        author: null,
        quote: null,
        history: [],
    },
    reducers: {
        setAuthor: (store, action) => {
            store.author = action.payload;
        },
        setQuote: (store, action) => {
            if (store.quote) {
                store.history.push(store.quote)
            }
            store.quote = action.payload;
        },
        setPreviousQuote: (store, action) => {
            if (store.history.length !== 0) {
                store.quote = store.history[store.history.length - 1]
                store.history.splice(-1, 1)
            }
        },
        setRestartGame: store => {
            store.username = null;
            
          },
    }
});

export const generateQuote = (tag) => {
    return (dispatch, getState) => {
        if (tag) {
            fetch(`http://api.quotable.io/random?author=${getState().labyrinth.author}&tags=${tag}`)
                .then(res => res.json())
                .then(quote => dispatch(labyrinth.actions.setQuote(quote)))
        } else {
            fetch(`http://api.quotable.io/random?author=${getState().labyrinth.author}`)
                .then(res => res.json())
                .then(quote => dispatch(labyrinth.actions.setQuote(quote)))
                // export const playerAction = () => {
                //     return (dispatch, getState) => {
                //       const settings = {
                //         method: "POST",
                //         headers: { "Content-Type": "application/json" },
                //         body: JSON.stringify({
                //           username: getState().game.username,
                //           type: getState().game.type,
                //           direction: getState().game.direction,
                //         }),
                //       }; 
        }
    }
}

export default labyrinth;
