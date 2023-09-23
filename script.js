async function onsubmitclick(str) {
    var bodyy = {
        "title": str,
        "numbertop": document.getElementById(`${str}top`).value,
        "numbermiddle": document.getElementById(`${str}middle`).middle,
        "numberbottom": document.getElementById(`${str}bottom`).bottom
    }

    await fetch('https://starmatkaagain.onrender.com/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: bodyy
      })
          .then(response => {
            console.log("here")
            console.log(response.json());
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            console.log(data)
          })
          .catch(error => {
            console.error('fetch error:', error);
          });
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }