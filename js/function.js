//    business logic

function Orderpizza(name, size, crust, topping, total){
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}

//      UI logic
//      add functionality to the proceed button
$(document).ready(function(){
  $("button.ordernow").click(function(event){
    let pname = $("name option:selected").val();
    let psize = $("#size option:selected").val();
    let pcrust = $("#crust option:selected").val();
    let ptopping = [];

    $.each($("input[name='toppings']:checked"), 
    function(){            
      ptopping.push($(this).val());
     });

  switch(psize){
    case "0":
      price =0;
    break;
    case "small":
      price = 500;
    break;
    case "medium":
      price = 1000;
    break;
    case "large":
       price = 1500;
    break;
  }
  switch(pcrust){
    case "0":
      crust_price = 0;
    break;
    case "Stuffed":
      crust_price = 100;
    break;
    case "Cracker":
      crust_price = 200;
    break;
    case "Thin":
      crust_price = 300;
    break;
  }
