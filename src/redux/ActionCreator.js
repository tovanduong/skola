
import * as ActionType from './ActionType'

export const fetchBlog = () => (dispatch) => {
  return fetch("http://localhost:3000/DataBlog")
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
    .then(blogs => dispatch(AddBlog(blogs)))
    .catch(error => console.log('ERROR ' + error));
}

export const fetchCourse = () =>{
  return fetch("http://localhost:3000/DataCourse")
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
    .then(courses => AddCourse(courses))
    .catch(error => console.log('ERROR ' + error));
}

export const fetchShop = () => (dispatch) => {
  return fetch("http://localhost:3000/DataShop")
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
    .then(shops => dispatch(AddShop(shops)))
    .catch(error => console.log('ERROR ' + error));
}

export const fetchRate = () => (dispatch) => {
  return fetch("http://localhost:3000/DataRating")
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
    .then(rates => dispatch(AddRate(rates)))
    .catch(error => console.log('ERROR ' + error));
}

export const fetchComment = () => (dispatch) => {
  return fetch("http://localhost:3000/DataComment")
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
    .then(comments => dispatch(AddComment(comments)))
    .catch(error => console.log('ERROR ' + error));
}

export const fetchLearn = () => (dispatch) => {
  return fetch("http://localhost:3000/Datalearn")
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
    .then(learns => dispatch(AddLearn(learns)))
    .catch(error => console.log('ERROR ' + error));
}

export const AddBlog = (blog) => (
  {
    type: ActionType.ADD_BLOG,
    payload: blog,
  }
)

export const AddCourse = (course) => (
  {
    type: ActionType.ADD_COURSE,
    payload: course,
  }
)

export const AddShop = (shop) => (
  {
    type: ActionType.ADD_SHOP,
    payload: shop,
  }
)

export const AddRate = (rate) => (
  {
    type: ActionType.ADD_RATE,
    payload: rate,
  }
)

export const AddComment = (comment) => (
  {
    type: ActionType.ADD_COMMENT,
    payload: comment,
  }
)

export const AddLearn = (learn) => ( 
  {
    type: ActionType.ADD_LEARN,
    payload: learn,
  }
)