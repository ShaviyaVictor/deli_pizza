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