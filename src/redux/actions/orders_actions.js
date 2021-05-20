import axios from 'axios';
import {
	GET_ORDER,
	GET_ORDER_ID,
	ADD_ORDER,
	EDIT_ORDER,
	GET_ERROR_ORDER,
	DELETE_ORDER	,
	SEARCH_ORDER,
} from '../constants';

const { REACT_APP_API } = process.env;


export const getOrder = (page) => {
	return function (dispatch) {
		return axios.get(`${REACT_APP_API}orders?page=`+page)
            .then((order) => {
                console.log(order.data)
				dispatch(
					{
						type: GET_ORDER,
						payload: order.data
					}
				)
			})
			.catch(err => {
				dispatch({
					type: GET_ERROR_ORDER,
                    payload: err.response,
				})
			})
	}
}
export const searchOrder = (name) => {
	return function (dispatch) {
		return axios.get(`${REACT_APP_API}orders?keyword=`+name)
			.then((order) => {
				dispatch(
					{
						type: SEARCH_ORDER,
						payload: order.data
					}
				)
			})
			.catch(err => {
				dispatch({
					type: GET_ERROR_ORDER,
                    payload: err.response,
				})
			})
	}
}

export const getOrderById = (payload) => {
	return function (dispatch) {
		return axios.get(`${REACT_APP_API}orders/${payload}`)
			.then((order) => {
				dispatch(
					{
						type: GET_ORDER_ID,
						payload: order.data
					}
				)
			})
			.catch((err) => {
				dispatch({
					type: GET_ERROR_ORDER,
                    payload: err.response,
				})
			})
	}
}

export const addOrder = (payload) => {
	return function (dispatch) {
		return axios.post(`${REACT_APP_API}orders/`, payload)
			.then((order) => {
				dispatch(
					{
						type: ADD_ORDER,
						payload: order.data
					}
				)
			})
			.catch((err) => {
				dispatch({
					type: GET_ERROR_ORDER,
                    payload: err.response,
				})
			})
	}
}

export const editOrder = (payload) => {
	return function (dispatch) {
		return axios.put(`${REACT_APP_API}orders/${payload.id}`, payload)
			.then((order) => {
				dispatch(
					{
						type: EDIT_ORDER,
						payload: order.data
					}
				)
			})
			.catch((err) => {
				dispatch({
					type: GET_ERROR_ORDER,
                    payload: err.response,
				})
			})
	}
}


export const deleteOrder = (payload) => {
	return function (dispatch) {
		return axios.delete(`${REACT_APP_API}orders/${payload}`)
			.then((order) => {
				dispatch(
					{
						type: DELETE_ORDER,
						payload: order.data
					}
				)
			})
			.catch((err) => {
				dispatch({
					type: GET_ERROR_ORDER,
                    payload: err.response,
				})
			})
	}
}