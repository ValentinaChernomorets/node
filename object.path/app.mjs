let data = {
    users:[
      {
        name: "John",
        address: {
          city: "GoodTown",
          country: "Amazing States of Unity"
        }
      },
      {
        name: "Marry",
        address: {
          city: "JobTown",
          country: "Employment Emirates"
        }
      },
    ]
}

function getValue(data, path) {
  // Split the path '.'.
  let segments = path.split('.')
  // Write circle.
  let result = data
  for (let segment of segments) {
  // Check if it is the segment in the object.
    if (result && result.hasOwnProperty(segment)) {
      result = result[segment]
    } else {
  // Return null, if segment in the object absent.
      return null
    }
  }
  // Return the result.
  return result
}

console.log(getValue(data, 'users.0.name'))
console.log(getValue(data, 'users.1.address.country'))
console.log(getValue(data, 'users.2.address.city'))