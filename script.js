let items = document.querySelectorAll('#tier-row');

let dragItem;
let lastDragItem;
let tempDragItem = document.createElement('div');
let i = document.querySelector('div#tier-list');
i.append(tempDragItem);
tempDragItem.setAttribute('draggable', true);

items.forEach(item =>
{
    item.addEventListener('dragstart', dragStart(e));
    item.addEventListener('dragend', dragEnd(e));
    item.addEventListener('dragover', dragOver(e));
    item.addEventListener('dragleave', dragLeave(e));
});

function dragStart(e)
{ 
    dragItem = e.target;
    item.parentElement.appendChild(tempDragItem);
}

function dragEnd(e)
{ 
    if (lastDragItem != dragItem)
    { 
        dragItem.remove();
        lastDragItem.before(dragItem);
        tempDragItem.remove();
    }
}

function dragOver(e)
{
    lastDragItem = e.target;
    e.target.style.border = '1px solid red';
}


function dragLeave(e)
{ 
    e.target.style.border = '1px solid black';
}
