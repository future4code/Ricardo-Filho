export class Movie {
    constructor(
        private id: string,
        private title: string,
        private description: string,
        private duration: number,
        private year: number
    ){}
    getId(){ 
        return this.id}
    getTitle(){
        return this.title
    }
    getDescription(){
        return this.description
    }
    getDuration(){
        return this.duration
    }
    getYear(){
        return this.year
    }
    setId(newId: string) {
        this.id = newId
    }
    setTitle(newTitle: string) {
        this.title = newTitle
    }
    setDescription(newDescription: string) {
        this.description = newDescription
    }
    setDuration(newDuration: number) {
        this.duration = newDuration
    }
    setYear(newYear: number) {
        this.year = newYear
    }
}