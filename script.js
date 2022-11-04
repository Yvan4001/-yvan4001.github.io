let items = document.querySelectorAll('.tier');
let images = document.querySelectorAll('img');
let img = document.createElement('img');

images.forEach(img =>
{
    img.setAttribute('draggable', true);
});

let dragItem;
let lastDragItem;
let tempDragItem = document.createElement('tr');
let i = document.querySelector('.tier');
i.append(tempDragItem);
tempDragItem.setAttribute('draggable', true);

items.forEach(item => {
    item.addEventListener('dragover', function (e) { dragOver(e, item); });
    item.addEventListener('dragleave', function (e) { dragLeave(e, item); });
});

images.forEach(item =>
{
    item.addEventListener('dragstart', function (e){ dragStart(e, item); });
    item.addEventListener('dragend', function(e){ dragEnd(e, item); });
});

function dragStart(e, item)
{ 
    dragItem = e.target;
    console.log(item);
    item.parentElement.appendChild(tempDragItem);
}

function dragEnd(e, item)
{ 
    if (dragItem != lastDragItem && lastDragItem != null)
    {
        dragItem.remove();
        lastDragItem.before(dragItem);
    }
    dragItem.style.opacity = '1';
    dragItem.style.height = '';
    tempDragItem.style.display = 'none';
    dragElem = null;
    lastDragItem = null;
}

function dragOver(e, item)
{
    lastDragItem = e.target;
    img.src = dragItem.getAttribute('src');
    img.opacity = '0.5';
    e.target.appendChild(img);
}


function dragLeave(e, item)
{ 
    e.target.style.backgroundColor = '';
    img.src = '';
}
