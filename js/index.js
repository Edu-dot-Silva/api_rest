// DOM

const btn_Calcula = document.getElementById('btn_Calcular')
const resultado = document.getElementById('resultado')

btn_Calcula.addEventListener('click', ()=>{
    const numero1 = document.getElementById('num1').value
    const numero2 = document.getElementById('num2').value

    fetch(`http://localhost:3000/api/somar?numero1=${numero1}&numero2=${numero2}`)
    .then(response => response.json())
    .then(data =>{
        resultado.textContent = `Resultado: ${data.soma}`
    })
    .catch(error =>{
        console.error('Erro ao somar', error)
        resultado.textContent = 'Erro para somar'
    })
    
})