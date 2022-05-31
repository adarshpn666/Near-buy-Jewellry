class Product {
    constructor(id,name,description, category, certificationDetails, gender, goldPurity, grossWeight, netWeight, price, shopId){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
        this.certificationDetails = certificationDetails;
        this.gender = gender;
        this.goldPurity = goldPurity;
        this.grossWeight = grossWeight;
        this.netWeight = netWeight;
        this.shopId = shopId;
      
    }
}

export default Product;