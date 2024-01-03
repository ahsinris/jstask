const rooms = {};

  const  addCar=(car)=> {

    const brand = car.brand;

    if (rooms.hasOwnProperty(brand)) {

      rooms[brand].push(car);

    } else {

      rooms[brand]=[];
       rooms[brand].push(car);
    }
  }

  const noofcars = prompt("Enter the No of Cars: ");

  for(let i=1; i<=noofcars; i++)
  
  {
      let brand= prompt(`Enter Car ${i} Brand:`);
      
      let owner= prompt(`Enter Car Owner:`);

      addCar({brand: brand, owner: owner});
  }
  console.log(rooms);