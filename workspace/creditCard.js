class CreditCard { 
    accept(vistor) { 
        throw new Error('abstract CC'); 
    } 
} 

class BronzeCC extends CreditCard { 
    accept(vistor) { 
        vistor.visitBronze(this); 
    } 
} 
class SilverCC extends CreditCard { 
    accept(vistor) { 
        vistor.visitBronze(this); 
    } 
} 
class GoldCC extends CreditCard { 
    accept(vistor) { 
        vistor.visitBronze(this); 
    } 
} 

class HotelOfferVistor { 
    visitBronze(bronzeCC) { 
        console.log("1 % of cashback") 
    } 
    visitSilver(silverCC) { 
        console.log("2 % of cashback") 
    } 
} 
class GasOfferVistor { 
    visitBronze(bronzeCC) { 
        console.log("2 % of cashback") 
    } 
    visitSilver(silverCC) { 
        console.log("4 % of cashback") 
    } 
} 

vistor = new GasOfferVistor(); 
bronzeCC = new BronzeCC(); 
bronzeCC.accept(vistor);
