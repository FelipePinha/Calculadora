const inputs = document.querySelectorAll('.input')
const output = document.querySelector('.outputArea')
const actions = document.querySelectorAll('.action')
const resultButton = document.querySelector('.result')

inputs.forEach(input => {
    if(input.classList.contains('action')) return

    input.addEventListener('click', () => {
        if(!output.innerHTML && input.classList.contains('operator')) {
            return
        }
        
        output.innerHTML = output.innerHTML + input.innerHTML
    })
})

resultButton.addEventListener('click', () => {
    if(output.innerHTML) {
        if(output.innerHTML.includes('X')) {
           output.innerHTML = output.innerHTML.replace('X', '*')
        }

        output.innerHTML = eval(output.innerHTML)
    }
})

actions.forEach(action => {
    action.addEventListener('click', () => {
        if(action.classList.contains('reset')) output.innerHTML = ''
        if(action.classList.contains('delete')) {
            output.innerHTML = output.innerHTML.slice(0, -1)
        }
    })
})