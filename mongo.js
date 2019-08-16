const mongoose = require('mongoose')

if ( process.argv.length<3 ) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://user31:${password}@cluster0-dke7f.mongodb.net/note-app?retryWrites=true&w=majority`




if (process.argv.length == 3) {
  Person.find({}).then(result => {
    result.forEach(person => {
      console.log(person)
    })
    mongoose.connection.close()
  })
}

else if (process.argv.length == 5) {
  const newName = process.argv[3]
  const newNumber = process.argv[4]

  const person = new Person({
    name: newName,
    number: newNumber
  })
   
  person.save().then(response => {
    console.log('person saved!');
    mongoose.connection.close();
  })
}

else (
  console.log("Wrong number of arguments")
)


