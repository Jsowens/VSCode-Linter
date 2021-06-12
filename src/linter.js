const FileOps = require("./fileOps");

class Linter {
    constructor(){
        this.fileOps = undefined
    };

    init() {
        this.fileOps = FileOps;
    }
}

// Export a new instance of Linter for use in other scripts
module.exports = new Linter();