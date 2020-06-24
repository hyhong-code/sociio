import axios from 'axios';

export const signUp = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'applicatin/json',
      },
    };

    const resp = await axios.post('/api/v1/auth/signup', formData, config);
    console.log(resp.data);
  } catch (error) {
    console.log(error.response);
  }
};
