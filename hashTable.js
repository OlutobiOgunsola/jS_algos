class HashTable {
    constructor() {
        this.data = [];
    }

    insertData = function(data) {
        if(!data || typeof(data) !== 'string') {
            throw new Error(`Cannot insert null or typeof ${typeof data} into table`)
        }

        let hash = data % 26;
        console.log(hash)
    }
}

var table = new HashTable();

table.insertData('')