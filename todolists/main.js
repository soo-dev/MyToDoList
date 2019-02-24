var totalItems = 0;

function updateItemStatus(){
	var checkB_id = this.id.replace('checkB_', '');
	var addListValue = document.getElementById('span_' + checkB_id);

	if(this.checked){
		addListValue.className = 'checked';
	}else{
		addListValue.className = '';
	}
}

function addNewItem(list, addListValue){

	totalItems++;

	var listItem = document.createElement('li');
	var checkbox = document.createElement('input');
	
	checkbox.type = 'checkbox';
	checkbox.id='checkB_'+totalItems;
	checkbox.onclick = updateItemStatus;

	var span = document.createElement('span');
	span.id = 'span_'+totalItems;
	span.innerText = addListValue;
	
	listItem.appendChild(checkbox);
	listItem.appendChild(span);
	list.appendChild(listItem);
}

var newBtn = document.getElementById('newBtn');

newBtn.onclick = function() {
	var addList = document.getElementById('list');
	var addListValue = addList.value;
	
	addNewItem(document.getElementById('todolist'), addListValue);
}
