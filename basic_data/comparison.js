function comparison(quest, symb, word) {
    let res = quest.replace('_', symb)
    let output = res === word ? 'Matched' : 'Not Matched'
    console.log(output)
}

comparison('str_ng', 'I', 'string')
comparison('str_ng', 'i', 'string')