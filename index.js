const button = document.querySelector('#button');
const list = document.querySelector('#list');

const getData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

const createHtml = (quote) => {
  return `<p>"${quote.quote}" - ${quote.by}</p> <img src="${quote.image}" alt="${quote.by}">`;
}

button.addEventListener('click', async () => {
  const serverQuoteList = await getData('https://finalspaceapi.com/api/v0/quote');
  let quoteID = Math.floor(Math.random() * 51);
  const quote = serverQuoteList[quoteID];
  list.innerHTML = createHtml(quote);
})