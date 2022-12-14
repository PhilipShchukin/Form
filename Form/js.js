function serializeForm(formNode) {
  const { elements } = formNode
  const data = Array.from(elements)
    .filter((item) => !!item.name)
    .map((element) => {
      const { name, value } = element
      return { name, value }
    })
  return data
}

async function sendData(data) {

  const json = JSON.stringify(data)

  return await fetch('https://628ce7a43df57e983ed86e96.mockapi.io/form', {

    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: json

  })

}
async function handleFormSubmit(event) {
  event.preventDefault()

  const data = serializeForm(event.target)
  const { status } = await sendData(data)
  if (status === 200 || 201) {
    onSuccess(event.target)
  }
}
function onSuccess(formNode) {
  alert('Ваша заявка отправлена!')
}


const applicantForm = document.getElementById('mars-once')
applicantForm.addEventListener('submit', handleFormSubmit)
