import Action from 'actions';

let tradeAct = Action.trade;

const initialState = {};

const trade = (state = initialState, action)=>{
    switch (action.type) {
        /* 切换会员卡*/
        case tradeAct.ADD_ORDER: {
            return state;
        }
        default:
            return state
    }
};
export default trade;
