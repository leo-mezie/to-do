
var form = document.getElementById('addform');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//add eventlistener to the form
form.addEventListener('submit', addItem);

//event to delete a list item
itemList.addEventListener('click', removeItem);

//filter event
filter.addEventListener('keypress', filterItem);



//add item
 function addItem(e){
    e.preventDefault();
  
    
    //get input value
    var newItem = document.getElementById('item').value;

    // create new li element
    var li = document.createElement('li');

    //addclass
    li.className = 'list-group-item';

    //add text node to the input value
    li.appendChild(document.createTextNode(newItem));


    //create a delete btn element
    var delButton = document.createElement('button');

    //add classname
    delButton.className ='btn btn-danger btn-sm float-right delete';

    //add a text node
    delButton.appendChild(document.createTextNode('x'));

    //append button to li
    li.appendChild(delButton);

    //append li to list
    itemList.appendChild(li);


 }

 //remove an item
 //letter in the bracket is the event object
 function removeItem(e){
if(e.target.classList.contains('delete'))
{
    //to confirm delete
    if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
    }
}

 }


//  filter list items
 function filterItem(e){
     //convert all search to lower case
     var text = e.target.value.toLowerCase();
    
     //get all li in the item list
     var items = itemList.getElementsByTagName('li');

     //convert to an array
     //if not an array it will show a whole list li tag and element
        Array.from(items).forEach(function(item){

            //get the item name
            var itemName = item.firstChild.textContent;

            //compare to know if what typed is same with li item
            //if no match den it is = -1
            if(itemName.toLowerCase().indexOf(text) != -1){

                //display if match is true
                item.style.display = 'block';
            }else{
                // hide if search is nt find
                item.style.display='none'
            }
        });
 }