const $html = document.querySelector('html')
const $checkbox = document.querySelector('#switch', '.menu')

$checkbox.addEventListener ('change', function(){
    $html.classList.toggle('dark-mode')
})