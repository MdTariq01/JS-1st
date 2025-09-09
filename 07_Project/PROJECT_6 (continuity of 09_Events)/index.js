let insertTable = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insertTable.innerHTML = `
  <div id = color>
  <table>
  <tr>
  <th>Key</th>
  <th>Keycode</th>
  <th>code</th>
  </tr>
  <tr>  
  <td>${e.key == ' ' ? 'space' : e.key}</td>
  <td>${e.keyCode}</td>
  <td>${e.code}</td>
  </tr>
  </table>
  </div>
  `;
});
