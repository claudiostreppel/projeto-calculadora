/* Em uma classe existem variaveis e funções mas, dentro da classe são chamadas de ATRIBUTOS E MÉTODOS */
/* Uma Classe é um conjunto de atributos e métodos*/
/* Um objeto representa uma classe */
/* A classe tem as regras de negocio */
/* O this refeerencia atributos e métodos */
/* get permite buscar e set permite mostrar*/

class CalcController {

    constructor() {
        this._locale = 'pt-BR'
        this._displayCalcEl = document.querySelector("#display")
        this._dateEl = document.querySelector("#data")
        this._timeEl = document.querySelector("#hora")
        this._currentDate 
        this.initialize()
        this.teste = 0

    }

    // faz com que a data e hora sejam atualizadas constantemente.

    initialize() {

       
       this.setDisplayDateTime()
        
        setInterval(() => {

          this.setDisplayDateTime()
                     
            
           
        }, 1000 )
    }

    // Coloca a data e hora dentro de um elemento
    setDisplayDateTime() {
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

    set currentDate(date) {

        this._currentDate = date
    }
    
}