
import * as ActionType from './ActionType'

export const fetchStaff = () => {
  return fetch("https://rjs101xbackend.herokuapp.com/staffs")
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      })
    .then(response => response.json())
    .then(staffs => AddStaff(staffs))
    .catch(error => console.log('ERROR ' + error));
}

export const AddStaff = (staffs) => (
  {
  type: ActionType.ADD_STAFF,
  payload: staffs,
}
)