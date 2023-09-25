async function onsubmitclick(str, patti) {
  var flag = true
  var bodyy = {
    'title': str,
  } 
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  // This arrangement can be altered based on how we want the date's format to
  // appear.
  let currentDate = `${year}-${month}-${day}`;
  bodyy.entrydate = currentDate
  if (patti === 'patti1') {
    let arr = []
    if (document.getElementById(`${str}patti1`).value != '') {
     let num = parseInt(document.getElementById(`${str}patti1`).value)
     while(num > 0){
      arr.push(...[parseInt(num%10)])
      num = parseInt(num/10)
     }
     if(document.getElementById(`${str}patti1num`).value != ''){
      arr.push(...[parseInt(document.getElementById(`${str}patti1num`).value)])
      arr.reverse()
      bodyy.patti1 = arr
     } else {
      //do nothing
      flag = false
     }
    } else{
      //do nothing
      flag = false
    }
  } else {
    let arr = []
    if (document.getElementById(`${str}patti2`).value != '') {
     let num = parseInt(document.getElementById(`${str}patti2`).value)
     while(num > 0){
      arr.push(...[parseInt(num%10)])
      num = parseInt(num/10)
     }
     if(document.getElementById(`${str}patti2num`).value != ''){
      arr.push(...[parseInt(document.getElementById(`${str}patti2num`).value)])
      arr.reverse()
      bodyy.updates = {
        "patti2" : arr
      }
     } else {
      //do nothing
      flag = false
     }
    } else{
      //do nothing
      flag = false
    }
  }

if(flag){
  console.log(bodyy)
  document.getElementById(`${str}${patti}`).value = ''
  document.getElementById(`${str}${patti}num`).value = ''
  if(patti === 'patti1'){
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
  } else {
    await fetch(`https://starmatkaagain.onrender.com/update`, { 
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
}
}
