let expense_per_category = [0,0,0,0,0,0];
var count = 5;

update_sum();

function update_sum(){
    var sum= document.querySelectorAll(".sum")
    for(var i=0; i<sum.length; i++){
        sum[i].innerHTML="- "+expense_per_category[i]+" Rs. spent";
    }
}

function add_expense(){
    var amount = document.getElementsByClassName("form-input")[0].value;
    var category = document.getElementsByClassName("form-input")[1].selectedIndex;
    var date = document.getElementsByClassName("form-input")[2].value;
    var note = document.getElementsByClassName("form-input")[3].value;
    var selected = document.getElementsByTagName("option")[category].value;

    if(amount  && selected && note && date){
        alert("Cheers!! Now you are broke");
        var table = document.getElementsByTagName("table")[0]
        var new_row = document.createElement("tr");
        new_row.innerHTML=`<tr style = border-bottom:1px solid white;>
        <td style=" border: 1px double white">${amount}</td>
        <td style= "border: 1px double white">${selected}</td>
        <td style= "border: 1px double white">${date}</td>
        <td style= "border: 1px double white">${note}</td>
        </tr>
        `;
        table.appendChild(new_row);
        console.log(expense_per_category[category]);
        console.log(amount);
        expense_per_category[category] = parseInt(expense_per_category[category])+parseInt(amount);
        update_sum();
        console.log(count);
        document.getElementsByClassName("add-new-expenses")[0].style.display="none";
    }
    else{
        alert("Are you stupid ? ,Fill all the details")
    }
}
function add_category(){
    var new_category_value= document.getElementsByName("new-category")[0].value;
    if(new_category_value){
        var dropdown= document.getElementsByName("category")[0];
        var available_categories= document.getElementsByClassName("available-categories")[0];
        var new_category_option = document.createElement("option");
        new_category_option.innerHTML=`<option>${new_category_value}</option>`;
        count++;
        expense_per_category[count]=0;
        var new_category_span= document.createElement("span");
        new_category_span.innerHTML=`<span>${new_category_value}<span class="sum" style="padding-left: 220px;">- ${expense_per_category[count]} Rs. spent</span></span>`;
        dropdown.appendChild(new_category_option);
        available_categories.appendChild(new_category_span);
        document.getElementsByClassName("add-category")[0].style.display="none";
    }
}
function add_category_page(){
    if(document.getElementsByClassName("add-category")[0].style.display=="block"){
        document.getElementsByClassName("add-category")[0].style.display ="none";
    }
    else{
        document.getElementsByClassName("add-category")[0].style.display="flex";
    }
}
function add_expense_page(){
    if(document.getElementsByClassName("add-new-expenses")[0].style.display=="block"){
        document.getElementsByClassName("add-new-expenses")[0].style.display ="none";
    }
    else{
        document.getElementsByClassName("add-new-expenses")[0].style.display="block";
    }
}
