import { ADD_ORDER, GET_ORDER,GET_ORDER_ID, EDIT_ORDER, DELETE_ORDER,SEARCH_ORDER } from './../constants';

const initialState = {
	order: {
		isLoading: false,
		list: [],
		order: {},
		error: false
	}
};

const orderReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ORDER:
			return {
				...state,
				order: {
					...state.order,
					list: action.payload
				}
			}
			case GET_ORDER_ID:
				return{
					...state,
					order:{
						...state.order,
						orders:action.payload
					}
				}
			case SEARCH_ORDER:
			return {
				...state,
				order: {
					...state.order,
					list: action.payload
				}
			}
		case ADD_ORDER:
			return {
				...state,
				order: {
					...state.order,
					list: [
						...state.order.list,
						action.payload
					]
				}
			}
		case EDIT_ORDER:
			return {
				...state,
				order: {
					...state.order,
					list: state.order.list.map(el => {
						if (el.id === action.payload.id) {
							return action.payload;
						}
						return el;
					})
				}
			}
		case DELETE_ORDER:
			return {
				...state,
				order: {
					...state.order,
					list: state.order.list.filter(order => order.id !== action.payload.id)
				}
			}
		default: return state;
	}
}

export default orderReducer;