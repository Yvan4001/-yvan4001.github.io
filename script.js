let items = document.querySelectorAll('.tier, #list-character');
let images = document.querySelectorAll('img');

images.forEach(img =>
{
    img.setAttribute('draggable', true);
});

let dragItem;
let lastDragItem;
let tempDragItem = document.createElement('tr');
let i = document.querySelector('.tier');

items.forEach(item => {
    item.addEventListener('dragover', function (e) { dragOver(e); });
});

images.forEach(item =>
{
    item.addEventListener('dragstart', function (e){ dragStart(e, item); });
    item.addEventListener('dragend', function(e){ dragEnd(e, item); });
});

function dragStart(e, item)
{ 
    dragItem = e.target;
    dragItem.style.opacity = '0.4';
}

function dragEnd(e, item)
{ 
    dragItem.style.opacity = '1';
    dragItem.style.height = '';
    dragElem = null;
    lastDragItem = null;
}

function dragOver(e)
{
    if (e.target.className == 'tier' || e.target.getAttribute('id') == 'list-character') {
        lastDragItem = e.target;
        lastDragItem.append(dragItem);
    }
    else {
        e.target.before(dragItem);
    }

    dragItem.opacity = '0.5';
}