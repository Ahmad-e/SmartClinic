import { createSlice, createStore } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';

const arr=[
    { id: 0, number: 0 },
    { id: 1, height: 0, states: [], number: 11, diagnostics: [], treatments: [] },
    { id: 2, height: 0, states: [], number: 12, diagnostics: [], treatments: [] },
    { id: 3, height: 0, states: [], number: 13, diagnostics: [], treatments: [] },
    { id: 4, height: 0, states: [], number: 14, diagnostics: [], treatments: [] },
    { id: 5, height: 0, states: [], number: 15, diagnostics: [], treatments: [] },
    { id: 6, height: 0, states: [], number: 16, diagnostics: [], treatments: [] },
    { id: 7, height: 0, states: [], number: 17, diagnostics: [], treatments: [] },
    { id: 8, height: 0, states: [], number: 18, diagnostics: [], treatments: [] },
    { id: 9, height: 0, states: [], number: 21, diagnostics: [], treatments: [] },
    { id: 10, height: 0, states: [], number: 22, diagnostics: [], treatments: [] },
    { id: 11, height: 0, states: [], number: 23, diagnostics: [], treatments: [] },
    { id: 12, height: 0, states: [], number: 24, diagnostics: [], treatments: [] },
    { id: 13, height: 0, states: [], number: 25, diagnostics: [], treatments: [] },
    { id: 14, height: 0, states: [], number: 26, diagnostics: [], treatments: [] },
    { id: 15, height: 0, states: [], number: 27, diagnostics: [], treatments: [] },
    { id: 16, height: 0, states: [], number: 28, diagnostics: [], treatments: [] },
    { id: 17, height: 0, states: [], number: 31, diagnostics: [], treatments: [] },
    { id: 18, height: 0, states: [], number: 32, diagnostics: [], treatments: [] },
    { id: 19, height: 0, states: [], number: 33, diagnostics: [], treatments: [] },
    { id: 20, height: 0, states: [], number: 34, diagnostics: [], treatments: [] },
    { id: 21, height: 0, states: [], number: 35, diagnostics: [], treatments: [] },
    { id: 22, height: 0, states: [], number: 36, diagnostics: [], treatments: [] },
    { id: 23, height: 0, states: [], number: 37, diagnostics: [], treatments: [] },
    { id: 24, height: 0, states: [], number: 38, diagnostics: [], treatments: [] },
    { id: 25, height: 0, states: [], number: 41, diagnostics: [], treatments: [] },
    { id: 26, height: 0, states: [], number: 42, diagnostics: [], treatments: [] },
    { id: 27, height: 0, states: [], number: 43, diagnostics: [], treatments: [] },
    { id: 28, height: 0, states: [], number: 44, diagnostics: [], treatments: [] },
    { id: 29, height: 0, states: [], number: 45, diagnostics: [], treatments: [] },
    { id: 30, height: 0, states: [], number: 46, diagnostics: [], treatments: [] },
    { id: 31, height: 0, states: [], number: 47, diagnostics: [], treatments: [] },
    { id: 32, height: 0, states: [], number: 48, diagnostics: [], treatments: [] }
];

const modeSlice = createSlice({
    name: "mode",
    initialState: {
        mode: (Cookies.get("color_mode-teeth") ? (Cookies.get("color_mode-teeth")) : "light" ),
        language: (Cookies.get("lang_mode") ? (Cookies.get("lang_mode")) :"En" ),
        token: Cookies.get("token_teeth"),
        account: Cookies.get("acc_num_teeth"),
        id: Cookies.get("iD_teeth"),
        basket: Cookies.get('basket_drop') ? (JSON.parse(Cookies.get('basket_drop'))) : ([]),
        apiURL:"http://13.60.167.157/",

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
                Cookies.set("color_mode-teeth","dark",{expires: 70})
                state.mode = "dark";
            }
            else
            {
                Cookies.set("color_mode-teeth","light",{expires: 70})
                state.mode = "light";
            }
        },
        setLanguage : (state,value)=>{
            Cookies.set("lang_mode",value.payload,{expires: 70})
            state.language = value.payload;
        },
        setAccount : (state,value)=>{
            Cookies.set("acc_num_teeth",value.payload,{expires: 70})
            state.account = value.payload;

            if(value.payload==="administrator")
                window.location.href = '/manager';
            
            // else if(value.payload===2)
            //     window.location.href = '/employee';
            // if(value.payload===3)
            //     window.location.href = '/merchant';
            // else if(value.payload===4)
            //     window.location.href = '/marketer';
        },
        setUserId : (state,value)=>{
            Cookies.set("iD_teeth",value.payload,{expires: 70})
            state.id = value.payload;
        },
        setToken : (state,value)=>{
            Cookies.set("token_teeth",value.payload,{expires: 70})
            state.token = value.payload;
        },
        logout : (state)=>{
            Cookies.set("token_teeth", undefined ,{expires: 70})
            state.token = undefined

            Cookies.set("iD_teeth",undefined,{expires: 70})
            state.id = undefined;

            Cookies.set("acc_num_teeth",undefined,{expires: 70})
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
        setDiagnosis : (state,value)=>{
            state.teethData[parseInt(state.selectedTeeth)].diagnostics=value.payload;
        },
        setTreatments : (state,value)=>{
            state.teethData[parseInt(state.selectedTeeth)].treatments=value.payload;
        }
    }
})

const store = createStore(modeSlice.reducer);
export const modeActions = modeSlice.actions;

export default store;
