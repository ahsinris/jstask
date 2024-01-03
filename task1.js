const  productprices=(noofproducts)=>{

    const arrayofprod = [];
    
    for(let i=1; i<=noofproducts; i++){

        let product= prompt(`Enter Product ${i}:`);

        let price= prompt(`Enter Product Price:`);

        let quantity= prompt(`Enter Product Quantity:`);

        arrayofprod.push({"Product Name": product,"Product Price": price,"Product Quantity":quantity});
    }
    let totalPrice=0;

    for (let i = 0; i <arrayofprod.length; i++) {

       return totalPrice += arrayofprod[i]["Product Name"]*arrayofprod[i]["Product Quantity"];
    }
  
    }
    
    console.log(productprices(2));
    