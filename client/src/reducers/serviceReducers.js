import {
  SERVICE_LIST_REQUEST,
  SERVICE_LIST_SUCCESS,
  SERVICE_LIST_FAIL,
  SERVICE_DETAILS_REQUEST,
  SERVICE_DETAILS_SUCCESS,
  SERVICE_DETAILS_FAIL,
  SERVICE_DELETE_REQUEST,
  SERVICE_DELETE_SUCCESS,
  SERVICE_DELETE_FAIL,
  SERVICE_CREATE_RESET,
  SERVICE_CREATE_FAIL,
  SERVICE_CREATE_SUCCESS,
  SERVICE_CREATE_REQUEST,
  SERVICE_UPDATE_REQUEST,
  SERVICE_UPDATE_SUCCESS,
  SERVICE_UPDATE_FAIL,
  SERVICE_UPDATE_RESET,
  SERVICE_TOP_REQUEST,
  SERVICE_TOP_SUCCESS,
  SERVICE_TOP_FAIL,
} from '../constants/serviceConstants'

export const serviceListReducer = (state = { services: [] }, action) => {
  switch (action.type) {
    case SERVICE_LIST_REQUEST:
      return { loading: true, services: [] }
    case SERVICE_LIST_SUCCESS:
      return {
        loading: false,
        services: action.payload.services,
        pages: action.payload.pages,
        page: action.payload.page,
      }
    case SERVICE_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const serviceDetailsReducer = (
  state = { service: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case SERVICE_DETAILS_REQUEST:
      return { ...state, loading: true }
    case SERVICE_DETAILS_SUCCESS:
      return { loading: false, service: action.payload }
    case SERVICE_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const serviceDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case SERVICE_DELETE_REQUEST:
      return { loading: true }
    case SERVICE_DELETE_SUCCESS:
      return { loading: false, success: true }
    case SERVICE_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const serviceCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case SERVICE_CREATE_REQUEST:
      return { loading: true }
    case SERVICE_CREATE_SUCCESS:
      return { loading: false, success: true, service: action.payload }
    case SERVICE_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case SERVICE_CREATE_RESET:
      return {}
    default:
      return state
  }
}

export const serviceUpdateReducer = (state = { service: {} }, action) => {
  switch (action.type) {
    case SERVICE_UPDATE_REQUEST:
      return { loading: true }
    case SERVICE_UPDATE_SUCCESS:
      return { loading: false, success: true, service: action.payload }
    case SERVICE_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    case SERVICE_UPDATE_RESET:
      return { service: {} }
    default:
      return state
  }
}

export const serviceTopRatedReducer = (state = { services: [] }, action) => {
  switch (action.type) {
    case SERVICE_TOP_REQUEST:
      return { loading: true, services: [] }
    case SERVICE_TOP_SUCCESS:
      return { loading: false, services: action.payload }
    case SERVICE_TOP_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}