class DOB{
    day: number;
    month: number;
    year: number;

    constructor(day: number, month: number, year: number){
        this.day = day;
        this.month = month;
        this.year = year;
    }

    getDOBAsDate(): Date{
        const d = new Date();
        d.setFullYear(this.year, this.month, this.day)
        return d
    }

    getDOBAsString(): String{
        let stringDay = ""
        let stringMonth = ""

        if(this.day<10){
            stringDay = `0${this.day}`
        } else{
            stringDay = `${this.day}`
        }; 

        if(this.month<10){
            stringMonth = `0${this.month}`
        } else{
            stringMonth = `${this.month}`
        };

        return `${stringDay}/${stringMonth}/${this.year}`
    }

}

export default DOB;
