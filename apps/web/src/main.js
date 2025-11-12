
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('Service Worker registrado com sucesso:', registration);
      })
      .catch(err => {
        console.error('Falha ao registrar Service Worker:', err);
      });
  });
}


const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'; 


const urlInput = document.getElementById('url-input');
const blockButton = document.getElementById('block-button');
const urlList = document.getElementById('url-list');


async function carregarLista() {
  try {
    const response = await fetch(`${API_URL}/urls`);
    const data = await response.json();
    
    urlList.innerHTML = ''; 
    data.urls.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item.url;
      urlList.appendChild(li);
    });
  } catch (error) {
    console.error('Falha ao carregar lista:', error);
    urlList.innerHTML = '<li>Falha ao carregar lista da API</li>';
  }
}


async function adicionarUrl() {
  const urlParaBloquear = urlInput.value;
  if (!urlParaBloquear) return;

  try {
    const response = await fetch(`${API_URL}/urls`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: urlParaBloquear }),
    });

    if (response.ok) {
      urlInput.value = ''; 
      carregarLista(); 
    } else {
      alert('Falha ao salvar URL');
    }
  } catch (error) {
    console.error('Falha ao adicionar URL:', error);
  }
}


blockButton.addEventListener('click', adicionarUrl);
document.addEventListener('DOMContentLoaded', carregarLista);