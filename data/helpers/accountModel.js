const db = require("../dbConfig");
const e = require("express");

module.exports = {
    get,
    insert,
    update,
    remove
  };

function get(id){
    let query = db("accounts");

    if(id){
        return query
            .where('id', id)
            .first()
            .then((acc) =>{
                if(acc){
                    console.log(acc);
                    return acc;
                } else {
                    return null;
                }
            });
    } else {
        return query
            .then((accs)=>{
                return accs.map(action=> 
                    action
                )
            })
    }
}

function insert(data){
    return db("accounts")
        .insert(data, 'id')
        .then(([id]) =>{
            get(id);
        })
}

function update(id, changes){
    return db("accounts")
        .where("id", id)
        .update(changes)
        .then((count)=>{
            if(count > 0){
                get(id);
            } else {
                null;
            }
        })
}

function remove(id){
    return db("accounts")
        .where("id", id)
        .del();
}