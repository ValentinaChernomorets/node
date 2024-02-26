module.exports = class File {
    constructor(name, type) {
        this.name = name
        this.type = type
    }
    info() {
        console.log(
            `File[${this.name} (${this.type})]`
        )
    }
}