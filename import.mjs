class Student {   
    constructor(name, matricNo, major) {       
        this.name = name;
        this.matricNo = matricNo;
        this.major = major;
        }      
        get Name() {       
            return this.name; }      
        set Name(name) {       
            this.name = name; } 
            
        get MatricNo() {
            return this.matricNo; 
        }
        set MatricNo(matricNo) {
            this.matricNo = this.matricNo;
        }
        get Major(){
            return this.major;
        } 
        set Major(major){
            this.major=major;
        }

        display(){
            console.log(`my name is ${this.name}`);
            console.log(`my matric No is ${this.matricNo}`);
            console.log(`my major is ${this.major}`);
        }
    }
    export{Student};