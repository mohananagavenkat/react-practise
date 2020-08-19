let consts = {};
if (process.env.NODE_ENV === 'production') {
  consts = {
    API_URI: 'http://localhost:10001/api'
  };
} else {
  consts = {
    API_URI: 'http://localhost:10001/api'
  };
}

export default consts;
