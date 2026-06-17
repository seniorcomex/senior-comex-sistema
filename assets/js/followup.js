
let tasks=JSON.parse(localStorage.getItem('tasks'))||[];

function save(){localStorage.setItem('tasks',JSON.stringify(tasks));}

function addTask(){
const cliente=document.getElementById('cliente').value;
const responsavel=document.getElementById('responsavel').value;
const obs=document.getElementById('obs').value;
const status=document.getElementById('status').value;

tasks.push({id:Date.now(),cliente,responsavel,obs,status});
save();renderTable();
}

function removeTask(id){
tasks=tasks.filter(t=>t.id!==id);
save();renderTable();
}

function renderTable(){
const f=document.getElementById('filter').value;
const tbody=document.getElementById('tableBody');
tbody.innerHTML='';
let data=tasks;
if(f!=='todos')data=tasks.filter(t=>t.status===f);

data.forEach(t=>{
tbody.innerHTML+=`<tr>
<td>${t.cliente}</td>
<td>${t.responsavel}</td>
<td>${t.obs}</td>
<td><span class='status ${t.status==='Pendente'?'pendente':t.status==='Em andamento'?'andamento':'finalizado'}'>${t.status}</span></td>
<td><button onclick='removeTask(${t.id})'>Excluir</button></td>
</tr>`;
});
}

renderTable();
