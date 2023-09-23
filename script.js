const { uri } = require(".");

async function onsubmitclick(str) {
    var bodyy = {
        "title": str,
        "numbertop": document.getElementById(`${str}top`).value,
        "numbermiddle": document.getElementById(`${str}middle`).value,
        "numberbottom": document.getElementById(`${str}bottom`).value
    }
    await fetch(`${uri}/upload`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyy)
      })
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ozak');
            }
            return response.json();
          })
          .catch(error => {
            console.error('fetch error:', error);
          });
}
