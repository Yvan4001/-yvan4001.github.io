let items = document.querySelectorAll('.tier-row');
let images = document.querySelectorAll('img');

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

items.forEach(item =>
{
    item.addEventListener('dragstart', function (e){ dragStart(e, item); });
    item.addEventListener('dragover', function (e){ dragOver(e, item); });
    item.addEventListener('dragleave', function (e){dragLeave(e, item); });
    item.addEventListener('dragend', function(e){ dragEnd(e, item); });
});

function dragStart(e, item)
{ 
    dragItem = e.target;
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
    e.target.style.backgroundColor = 'red';
}


function dragLeave(e, item)
{ 
    e.target.style.backgroundColor = '';
}
