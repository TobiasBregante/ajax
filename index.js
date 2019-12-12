let xhr = new XMLHttpRequest();
const data = document.querySelector('#frm_usuario');
data.addEventListener('submit',(ev) =>{
	let form = new FormData(data);
	xhr.open('POST', 'back.php');
	xhr.onload = () => {
		if (xhr.status === 200) {
			document.querySelector('.ajaxText').insertAdjacentHTML('beforeend', xhr.responseText + '<br>');
		}else{
			console.log(`error en la petición: ${xhr.status}`);
		}
	}
	xhr.send(form);
	ev.preventDefault();
});