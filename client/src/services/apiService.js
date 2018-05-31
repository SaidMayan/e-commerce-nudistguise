import jwtDecode from 'jwt-decode';

function checkStatus(resp) {
  if (!resp.ok) throw new Error(resp.statusMessage);
  return resp.json();
}

function saveToken(respBody) {
  localStorage.setItem('authToken', respBody.token);
  const user = jwtDecode(respBody.token);
  return user;
}

function logout() {
  localStorage.removeItem('authToken');
}

function login(creds) {
  const options = {
    method: 'POST',
    body: JSON.stringify(creds),
    headers: {
      'content-type': 'application/json'
    }
  }

  return fetch('/api/auth/login', options)
  .then(checkStatus).then(saveToken)
}

function register(creds) {
  const options = {
    method: 'POST',
    body: JSON.stringify(creds),
    headers: {
      'content-type': 'application/json'
    }
  }

  return fetch('api/auth/register', options)
  .then(checkStatus).then(saveToken)
}

export {
  login,
  register,
  logout
}

