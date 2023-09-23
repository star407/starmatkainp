async function onsubmitclick(str) {
    var bodyy = {
        "title": str,
    }
    if(document.getElementById(`${str}top`).value != ""){
      bodyy.numbertop = document.getElementById(`${str}top`).value
    }
    if(document.getElementById(`${str}middle`).value != ""){
      bodyy.numbermiddle = document.getElementById(`${str}middle`).value
    }
    if(document.getElementById(`${str}bottom`).value != ""){
      bodyy.numberbottom = document.getElementById(`${str}bottom`).value
    }
    document.getElementById(`${str}top`).value = ""
    document.getElementById(`${str}middle`).value = ""
    document.getElementById(`${str}bottom`).value = ""
    await fetch(`https://starmatkaagain.onrender.com/upload`, {
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
