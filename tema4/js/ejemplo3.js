/* window.addEventListener('DOMContentLoaded', iniciar);

function iniciar() {
    var pluginsLength = navigator.plugins.length;
    document.body.innerHTML = pluginsLength + " Plugin(s)<br>"
        + '<table id="pluginTable"><thead>'
        + '<tr><th>Name</th><th>Filename</th><th>description</th><th>version</th></tr>'
        + '</thead><tbody></tbody></table>';
    var table = document.getElementById('pluginTable');
    for (var i = 0; i < pluginsLength; i++) {
        let newRow = table.insertRow();
        newRow.insertCell().textContent = navigator.plugins[i].name;
        newRow.insertCell().textContent = navigator.plugins[i].filename;
        newRow.insertCell().textContent = navigator.plugins[i].description;
        newRow.insertCell().textContent = navigator.plugins[i].version ? navigator.plugins[i].version : "";
    }

} */
var win = window.open('', "MsgWindow", "width=200,height=100");
win.resizeTo(screen.availWidth, screen.availHeight);
win.moveTo(0, 0);
win.document.write('hola');