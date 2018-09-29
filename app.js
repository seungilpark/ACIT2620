//imports
const fs = require('fs');
// const movie = new Movie(title, director, starring, rating, budget, year)
// FIXME: VALIDATION

module.exports = class Japp {
    constructor(filename, arrName){
        this.filename = filename
        this.arrName = arrName
        this.data = {}; 
    }

    createFile(){
        //creates a json file, this will be our database
        if (fs.existsSync(this.filename)) {
            return
        } 
        this.data[this.arrName] = []
        fs.writeFileSync(this.filename, JSON.stringify(this.data));
        console.log(`${this.filename} created.`)
    }
    load(){
        //load data from database before we CRUD them
        this.data = JSON.parse(fs.readFileSync(this.filename, 'utf8'))
    }

    save(){
        //save data to database after we CRUD them
        fs.writeFileSync(this.filename, JSON.stringify(this.data));
    }
    add(obj){
        // add obj
        this.load()
        this.data[this.arrName].push(obj);
        this.save()
        console.log(`${JSON.stringify(obj)} is added to ${this.filename}.`) 
    }
    delete(propName, value){
        //delete obj from data by property and value
        // FIXME: WHEN THERE IS NOTHING
        this.load();
        let filteredList = this.data[this.arrName];
        this.data[this.arrName] = filteredList.filter(item => item[propName] != value);
        this.save();
        console.log(`an item is deleted from ${this.filename}.`) 
    }

    fetch(propName, value){
        // return specific item
        // FIXME: WHEN THERE IS NOTHING
        this.load();
        console.log('Fetched items: ')
        return this.data[this.arrName].filter(item=>item[propName] === value);
    }
    display(){
        // display items 
        // FIXME: Loop through each property name in a formated string instead of obj
        if (this.data[this.arrName].length > 0){
            for (let i=0; i<this.data[this.arrName].length;i++) {
                console.log(JSON.stringify(this.data[this.arrName][i]));
            }
        } else {
            console.log(`there is no item in ${this.data[this.arrName]}`)
        }
        
    }
}