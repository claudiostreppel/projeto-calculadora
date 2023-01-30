class CalcController {

    constructor() {

        this._displayCalcEl = document.querySelector("#display")
        this._dateEl = document.querySelector("#data")
        this._timeEl = document.querySelector("#hora")
        this._currentDate
        this.initialize()
        this._locale = 'pt-BR'
    }

    initialize() {

        this.setdisplayTimeDate()

        setInterval(() => {

           this.setdisplayTimeDate()
            
        },1000)
        
    }

    setdisplayTimeDate() {
        
        this.displayDate = this.currentDate.toLocaleDateString(this._locale)
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale)

    }

    get displayTime() {

        return this._timeEl.innerHTML
        
    }

    set displayTime(value) {
        
        this._timeEl.innerHTML = value
    }

    get displayDate() {
        return this._dateEl.innerHTML
    }

    set displayDate(value) {

        this._dateEl.innerHTML = value
    }


    get displayCalc() {

        return this._displayCalcEl.innerHTML
    }
    set displayCalc(valor) {

        this._displayCalcEl.innerHTML = valor
    }

    get currentDate() {
        return new Date()
    }

    set currentDate(value) {
        this._currentDate = value
    }
}