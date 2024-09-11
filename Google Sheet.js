const scriptURL = 'https://script.google.com/macros/s/AKfycbxjN--YkQ_bd6oOieKZaLcsOncXAd1LgaS3OmMSmTekr1aLSrKOcf7AAFE7V1Z92W81/exec'


const form = document.forms['RSVP_Details']


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
