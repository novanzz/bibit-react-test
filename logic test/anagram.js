function anagram() {
    var words = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan','kua']
    var splitWord = ""
    var reducedObj = {}
    for (var i = 0; i < words.length; i++) {
        splitWord = words[i].split("")
        id = ascending(splitWord).join("")
        reducedObj[id] =[reducedObj[id]]+" "+words[i] ;
    }

    var group = Object.values(reducedObj)
    var result = [];
    for (let item in group) {
        var tmp = group[item].split(" ")
        tmp.shift()
        result.push(tmp)
    }
    return result
}


function ascending(array) {
    var finish = false;
    while (!finish) {
        finish = true;
        for (var x = 1; x < array.length; x++) {
            if (array[x - 1] > array[x]) {
                finish = false;
                var first = array[x - 1];
                array[x - 1] = array[x];
                array[x] = first;
            }
        }
    }

    return array;
}

console.log(anagram())