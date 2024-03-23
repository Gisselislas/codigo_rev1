const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const nombre = document.querySelector('.name'); // cambio de nombre de variable 
const block = document.querySelector('.blog'); // cambio de nombre de variable 
const locacion = document.querySelector('.location'); // cambio de nombre de variable

async function displayUser(username) { //se agregó el async al inicio de la función//
  nombre.textContent = 'cargando...'; // se cambio el text content
  const data = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);
  nombre.textContent = `${data.name}`;
  block.textContent = `${data.blog}`;
  locacion.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);