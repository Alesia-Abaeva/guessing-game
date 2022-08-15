class GuessingGame {
    constructor() {
        this.minNumber
        this.maxNumber
        this.result
    }
    // инициализируем специальные значения этого класса

    setRange(min, max) {
        this.minNumber = min



        this.maxNumber = max


    }


    guess() {
        this.result =  Math.round((this.maxNumber + this.minNumber) / 2)
       return this.result

    }


    lower() {

        this.maxNumber = Math.round((this.maxNumber + this.minNumber) / 2)

        
    }



    greater() {

       this.minNumber =  Math.round((this.maxNumber + this.minNumber) / 2)
    }
 
}

module.exports = GuessingGame;



