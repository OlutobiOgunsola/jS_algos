class HashTable {
    constructor() {
        this.data = [];
    }

    insertData = function(nextData) {
        if(!nextData||typeof (nextData) !== 'string') {
            throw new Error(`Cannot insert null or typeof ${typeof nextData} into table`)
        }

        let hash = nextData % 26;
        console.log(hash)
    }
}

var table = new HashTable();

table.insertData('WONDER');