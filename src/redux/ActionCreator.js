import * as ActionType from './ActionType'

export const fetchStaff = () => (dispatch) => {
    return fetch("https://rjs101xbackend.herokuapp.com/staffs")
      .then((response) => response.json())
      .then((staff) => dispatch(AddStaff(staff)))
  };

export const AddStaff = (staff) => ({
    type: ActionType.ADD_STAFF,
    payload: staff
})