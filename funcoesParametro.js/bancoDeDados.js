
CreateStringConnection("DB_PRODUCTS", "paulo", "1234")
function CreateStringConnection(dataBaseName, user, pass){
    console.log(`connect DBCONNECT: user=${user}; pass=${pass}; initial_database= ${dataBaseName}` )
}