function serializeToJSON(form) {
    let con = form.serializeArray();
    let result = {};
    con.forEach(item => {
        result[item['name']] = item['value'];
    });
    return result;
}