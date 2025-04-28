import { createSlice, createStore } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';

const arr=[
    { id: 0, number: 0 },
    { id: 1, height: 0, states: [], number: 11 },
    { id: 2, height: 0, states: [], number: 12 },
    { id: 3, height: 0, states: [], number: 13 },
    { id: 4, height: 0, states: [], number: 14 },
    { id: 5, height: 0, states: [], number: 15 },
    { id: 6, height: 0, states: [], number: 16 },
    { id: 7, height: 0, states: [], number: 17 },
    { id: 8, height: 0, states: [], number: 18 },
    { id: 9, height: 0, states: [], number: 21 },
    { id: 10, height: 0, states: [], number: 22 },
    { id: 11, height: 0, states: [], number: 23 },
    { id: 12, height: 0, states: [], number: 24 },
    { id: 13, height: 0, states: [], number: 25 },
    { id: 14, height: 0, states: [], number: 26 },
    { id: 15, height: 0, states: [], number: 27 },
    { id: 16, height: 0, states: [], number: 28 },
    { id: 17, height: 0, states: [], number: 31 },
    { id: 18, height: 0, states: [], number: 32 },
    { id: 19, height: 0, states: [], number: 33 },
    { id: 20, height: 0, states: [], number: 34 },
    { id: 21, height: 0, states: [], number: 35 },
    { id: 22, height: 0, states: [], number: 36 },
    { id: 23, height: 0, states: [], number: 37 },
    { id: 24, height: 0, states: [], number: 38 },
    { id: 25, height: 0, states: [], number: 41 },
    { id: 26, height: 0, states: [], number: 42 },
    { id: 27, height: 0, states: [], number: 43 },
    { id: 28, height: 0, states: [], number: 44 },
    { id: 29, height: 0, states: [], number: 45 },
    { id: 30, height: 0, states: [], number: 46 },
    { id: 31, height: 0, states: [], number: 47 },
    { id: 32, height: 0, states: [], number: 48 }
];

const modeSlice = createSlice({
    name: "mode",
    initialState: {
        mode: (Cookies.get("color_mode") ? (Cookies.get("color_mode")) : "light" ),
        language: (Cookies.get("lang_mode") ? (Cookies.get("lang_mode")) :"En" ),
        token: Cookies.get("token_drop"),
        account: Cookies.get("acc_num_drop"),
        id: Cookies.get("iD_drop"),
        basket: Cookies.get('basket_drop') ? (JSON.parse(Cookies.get('basket_drop'))) : ([]),
        apiURL:"https://api.familydroop.com/api/",

        //////////////////

        lin0Height:0,
        sinus_1:0,
        sinus_2:0,
        lin1Height:0,
        lin2Height:0,
        selectedTeeth:0,
        teethData:arr
        
    },
    reducers: {
        toggleMode : (state)=>{
            if(state.mode==="light")
            {
                Cookies.set("color_mode","dark",{expires: 70})
                state.mode = "dark";
            }
            else
            {
                Cookies.set("color_mode","light",{expires: 70})
                state.mode = "light";
            }
        },
        setLanguage : (state,value)=>{
            Cookies.set("lang_mode",value.payload,{expires: 70})
            state.language = value.payload;
        },
        setAccount : (state,value)=>{
            Cookies.set("acc_num_drop",value.payload,{expires: 70})
            state.account = value.payload;

            if(value.payload===1)
                window.location.href = '/admin';
            else if(value.payload===2)
                window.location.href = '/employee';
            if(value.payload===3)
                window.location.href = '/merchant';
            else if(value.payload===4)
                window.location.href = '/marketer';
        },
        setUserId : (state,value)=>{
            Cookies.set("iD_drop",value.payload,{expires: 70})
            state.id = value.payload;
        },
        setToken : (state,value)=>{
            Cookies.set("token_drop",value.payload,{expires: 70})
            state.token = value.payload;
        },
        logout : (state)=>{
            Cookies.set("token_drop", undefined ,{expires: 70})
            state.token = undefined

            Cookies.set("iD_drop",undefined,{expires: 70})
            state.id = undefined;

            Cookies.set("acc_num_drop",undefined,{expires: 70})
            state.account = undefined;

            window.location.href="/"

        },

        ////////////////

        setLine0Height : (state,value)=>{
            state.lin0Height = value.payload;
            console.log(value.payload)
        },
        setSinus_1 : (state,value)=>{
            state.sinus_1 = value.payload;
        },
        setSinus_2 : (state,value)=>{
            state.sinus_2 = value.payload;
        },
        setLine1Height : (state,value)=>{
            state.lin1Height = value.payload;
        },
        setLine2Height : (state,value)=>{
            state.lin2Height = value.payload;
        },
        setSelectedTeeth : (state,value)=>{
            state.selectedTeeth = value.payload;
        },
        setTeethHeight : (state,value)=>{
            state.teethData[parseInt(state.selectedTeeth)].height=value.payload;
        },
    }
})

const store = createStore(modeSlice.reducer);
export const modeActions = modeSlice.actions;

export default store;
