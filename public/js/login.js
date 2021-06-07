//function for logging in
const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (username && password) {
      try {
        const response = await fetch('/api/user/login', {
          method: 'POST',
          body: JSON.stringify({ username, password }),
          headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          alert("Incorrect username or password - please try again")
        }
  
      } catch (error) {
        alert(error.message)
      }
    } else {
      alert('Please enter a username & password')
    }
  };

  //function for signing up
const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && password) {
    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to sign up.');
    }
  } else {
    alert('Please enter a username & password')
  };
};

//Event Listeners
document
  .querySelector('#loginBtn')
  .addEventListener('click', loginFormHandler);

document
  .querySelector('#signupBtn')
  .addEventListener('click', signupFormHandler);
  