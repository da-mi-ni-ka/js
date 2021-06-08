const wrapper = document.createElement('div');
    log = document.createElement('div'),
	reg = document.createElement('div'),
	loginForm = document.createElement('form'),
    loginFormEmail = document.createElement('div'),
    loginFormPassword = document.createElement('div'),
    loginFormBtn = document.createElement('div'),
	registerForm = document.createElement('form');
    registerFormEmail = document.createElement('div'),
    registerFormPassword = document.createElement('div'),
    registerFormConfirmPassword = document.createElement('div'),
    registerFormBtn = document.createElement('div'),


document.body.appendChild(wrapper);
loginForm.appendChild(loginFormEmail);
loginForm.appendChild(loginFormPassword);
loginForm.appendChild(loginFormBtn);
registerForm.appendChild(registerFormEmail);
registerForm.appendChild(registerFormPassword);
registerForm.appendChild(registerFormConfirmPassword);
registerForm.appendChild(registerFormBtn);
wrapper.appendChild(log);
wrapper.appendChild(reg);
wrapper.appendChild(loginForm);
wrapper.appendChild(registerForm);


wrapper.id = 'wrapper';
log.id = 'login';
log.innerHTML = 'login';

reg.id = 'register';
reg.innerHTML = 'register';

reg.onclick = function(){
	this.style.color = '#fff';
	log.style.color = '#888';
	loginForm.style.display = 'none';
	registerForm.style.display = 'block';
};

log.onclick = function(){
	this.style.color = '#fff';
	reg.style.color = '#888';
	loginForm.style.display = 'block';
	registerForm.style.display = 'none';
};

loginForm.id = 'loginForm';

loginFormEmail.className = 'loginFormEmail';
loginFormEmail.innerHTML = "<label>e-mail</label><br/>" +
                        "<input class='inputStyles' type='text' placeholder='e-mail'></input>";

loginFormPassword.className = 'loginFormPassword';
loginFormPassword.innerHTML = "<label>password</label><br/>" +
                        "<input class='inputStyles' type='password' placeholder='***********'></input>";

loginFormBtn.className = 'loginFormBtn';
loginFormBtn.innerHTML = "<button class='btn'>Login</button>";


registerForm.id = 'registerForm';

registerFormEmail.className = 'registerFormEmail';
registerFormEmail.innerHTML = "<label>e-mail</label><br/>" +
                        "<input class='inputStyles' type='text' placeholder='e-mail'></input>";

registerFormPassword.className = 'registerFormPassword';
registerFormPassword.innerHTML = "<label>password</label><br/>" +
                        "<input class='inputStyles' type='password' placeholder='***********'></input>";
registerFormConfirmPassword.className = 'registerFormConfirmPassword';
registerFormConfirmPassword.innerHTML = "<label>confirm password</label><br/>" +
                        "<input class='inputStyles' type='password' placeholder='***********'></input>";
registerFormBtn.className = 'registerFormBtn';
registerFormBtn.innerHTML = "<button class='btn'>Register</button>";




