function login(){
const u=document.getElementById('user').value;
const p=document.getElementById('pass').value;
if(u==='admin'&&p==='123'){
localStorage.setItem('seniorLogged','true');
window.location.href='dashboard.html';
}else{
document.getElementById('msg').innerText='Usuário: admin | Senha: 123';
}
}

if(window.location.pathname.includes('dashboard.html')){
if(localStorage.getItem('seniorLogged')!=='true'){
window.location.href='login.html';
}
}
