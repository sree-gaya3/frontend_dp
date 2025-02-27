

class BronzeCreditCard implements CreditCard {
    accept(offerVisitor) {
        offerVisitor.visitBronze(this);
    }
}

class HotelOfferVisitor implements Visitor {
        visitBronze(bronzeCreditCard) {
            // cashback
        }
        visitSilver(SilverCreditCard) {
            // cashback
        }
}

visitor = new HotelOfferVisitor();
bronzeCC = new  BronzeCreditCard();
bronzeCC.accept(visitor); // double dispatch