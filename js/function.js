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

  let topping_value = ptopping.length*100;

  if((psize == "0") && (pcrust == "0")){
    $("button.ordernow").show();
    $("#alert").show();
    $("div.order_made").hide();
    alert("Oops! Check your input values..."); 
  }
  else{
    $("button.ordernow").hide();
    $("#alert").hide();
    $("div.order_made").slideDown(800);
  }

  total = price + crust_price + topping_value;
  let checkoutTotal = 0;
  checkoutTotal = checkoutTotal + total;

  $("#flavvor").html($(".name option:selected").val());
  $("#sizze").html( $("#size option:selected").val());
  $("#crusst").html($("#crust option:selected").val());
  $("#topping").html(ptopping.join(", "));
  $("#total").html(total);
  
//    Activate the add pizza button
  $("button.addOrder").click(function(){
    let pname = $(".name option:selected").val();
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

    let topping_value = ptopping.length*100;
    total = price + crust_price + topping_value;
    checkoutTotal = checkoutTotal + total;

      // constractor function
    var newOrder = new Orderpizza(pname, psize, pcrust,ptopping,total);

    $("#ordersmade").append('<tr><td id="pizzaname">'+newOrder.name +'</td><td id="pizzasize">' + newOrder.size + '</td><td id="pizzacrust">'+newOrder.crust + '</td><td id="pizzatopping">'+newOrder.topping+'</td><td id="totals">'+newOrder.total+'</td></tr>');  
  });

  // Checkout button
  $("button#checkout").click(function(){ 
    $("button#checkout").hide();
    $("button.addOrder").hide();
    $("button.deliver").slideDown(1000);
    $("#addedprice").slideDown(1000);
    $("#pizzatotal").append("Your bill is sh. "+checkoutTotal);
  });

  // home delivery button
  $("button.deliver").click(function(){
    $(".order_summary").hide();
    $(".order_made h2").hide();
    $(".delivery").slideDown(1000);
    $("#addedprice").hide();
    $("button.deliver").hide();
    $("#pizzatotal").hide();

    let deliveryamount = checkoutTotal + 200;
    $("#totalbill").append("Bill (delivery included): Ksh. "+deliceryamount);
  });

      // when one clicks place order button
      $("button#final-order").click(function(event){
        event.preventDefault();
  
        $("#pizzatotal").hide();
        $(".delivery").hide();
        $("button#final-order").hide();
        let deliveryamount = checkoutTotal + 200;
        let person = $("input#name").val();
        let phone = $("input#phone").val();
        let location = $("input#location").val();
  
        if ($("input#name").val() && $("input#phone").val() && $("input#location").val()!=""){
    
          $("#finallmessage").append(`Hi ${person}, we have recieved your order. The order is being dispatched for delivery to ${location}. Your bill has amounted to Ksh.${deliveryamount}`);
          $("#totalbill").hide();
          $("#finallmessage").slideDown(1000);
        }
        else {
          alert("Please check your delivery inputs!");
          $(".delivery").show();
          $("button#final-order").show();
        }
      });
     event.preventDefault();
    });
  });