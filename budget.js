var budget1=0;
var totalBudget=0;
var expenseArr=[];
var arr=[];
var obj;
function myBudget(){
     budget1=parseInt(document.getElementById("budget").value||0);
     totalBudget+=budget1;
     document.getElementById("budgetAmount").innerHTML=totalBudget;
     calculateBalance();
}


function myExpense(){
    var expense1=document.getElementById("expense").value;
    //document.getElementById("expenseTitle").innerHTML+= expense1+"<br>";

    var expense2=parseInt(document.getElementById("amount").value||0);
    //document.getElementById("expenseValue").innerHTML+=expense2 + "<br>";
    
    addAmount(expense2);
    calculateBalance();

    

    obj={name: expense1,
        value: expense2
        };
    expenseArr.push(obj);
    arr.push(obj);
    expenseArr.forEach(function(x, y){
        $("#budgetTable").append('<tr>'
        +' <td style="color: red;">' + x.name+ '</td>'
        +'<td style="color: red;">'+x.value+'</td>'
        +'<td>'+'<i class="far fa-edit" style="font-size:18px;color:blue; onclick="editFunction('+y+', this);"></i><i class="fa fa-trash-o" style="font-size:18px;color:red" onclick="deleteFunction('+y+', this)">'+'</td>'
        +'</tr>');
        delete expenseArr[y];
    });
}
function addAmount(amt){
    var x= parseInt(document.getElementById("expenseAmount").innerHTML||0);
    document.getElementById("expenseAmount").innerHTML= x + parseInt(amt);
}
function calculateBalance(){
    var totalBalance=0, x=0, y=0;
     y=parseInt(document.getElementById("budgetAmount").innerHTML||0);
     x=parseInt(document.getElementById("expenseAmount").innerHTML||0);
    totalBalance= parseInt(y)-parseInt(x);
    document.getElementById("balance").innerHTML=totalBalance; 
}
function deleteFunction(val, z){
   
    var a=arr[val].value;
    var examt=document.getElementById("expenseAmount").innerHTML;
    document.getElementById("expenseAmount").innerHTML=examt-a;
    calculateBalance();
    $(z).parent().parent().remove();

}




