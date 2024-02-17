var a = document.getElementById('main')
var b = document.getElementById('inputdisplay')
function getNewelm() 
{
    
    var para = document.createElement('p')
    para.innerHTML = b.value
    
    para.style.color = 'white'
    para.style.fontSize = '30px'
    para.style.padding = '10px'
    
    var btn = document.createElement('button')
    var btnText = document.createTextNode('Delete')
    btn.appendChild (btnText)
    btn.setAttribute('onclick' ,'deleteText(this)')
    para.appendChild(btn)
    a.appendChild(para)
    
    btn.style.backgroundColor = 'white'
    btn.style.width = '100px'
    btn.style.height = '50px'
    btn.style.border = 'none'
    btn.style.borderRadius = '30px'
    btn.style.fontSize = '20px'
    btn.style.margin = '25px'
    btn.style.cursor = 'pointer'

}
function  deleteText(text) 
{
  var btn = text.parentNode
  btn.remove();
} 
function deleteAll ()
{
    a.innerHTML = " ";
}