const button = document.querySelector('#button');
const list = document.querySelector('#list');

const getData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

const createHtml = (text) => {
  return `<li>${text}</li>`;
}

button.addEventListener('click', async () => {
  const serverResponse = await getData('https://cat-fact.herokuapp.com/facts/random');
  list.innerHTML = createHtml(serverResponse.text);
})