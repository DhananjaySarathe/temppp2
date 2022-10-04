exports.allShops=allShops;        

function allShops() {
    
    let arr=[];
    const fshop1={
        Haircut:60,
        Shave:50,
        HnS:110
    };

    const shop1={
        city:"jabalpur",
        locality:"gokalpur",
        pincode:482051,
        name:"JL Men's Saloon",
        visitingHours:"9:30am to 9:30pm",
        location:"https://www.google.com/maps/place/23%C2%B011'23.8%22N+79%C2%B059'07.7%22E/@23.1899294,79.9832738,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x7e1cf2b739089b4e!8m2!3d23.1899294!4d79.9854625?hl=en",
        services:fshop1
    };

    arr.push(shop1);
    return arr;
}


