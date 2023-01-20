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
        this.initButtonsEvents()

    }

    // faz com que a data e hora sejam atualizadas constantemente.

    initialize() {


        this.setDisplayDateTime()

        setInterval(() => {

            this.setDisplayDateTime()



        }, 1000)
    }

    addEventListenerAll(element, events, fn) {

        events.split(' ').forEach(event => {

            element.addEventListener(event, fn, false)
        })
    }


    initButtonsEvents() {
        /* O queryselector pega o primeiro elemento que atender os parametros. O query selectorAll pega todos os elementos que atenderem os parametros */

        let buttons = document.querySelectorAll("#buttons > g, #parts > g")



        /* a variavel buttons recebe uma lista de elementos. O forEach vai varrer essa lista cada vez que houver um click*/

        buttons.forEach((btn, index) => {
            this.addEventListenerAll(btn, 'click drag ', e => {
                console.log(btn.className.baseVal.replace("btn-", ""))
            })

            this.addEventListenerAll(btn, "mouseover mouseup mousedown",  e => {
            
                btn.style.cursor = "pointer"
                
            })

            

        })
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