const ourObject = {
  name: 'John',
  myNameIs: function () {
    console.log(this.name)
  },
}

const newObject = { name: 'Alisa' }

newObject.myNameIs = ourObject.myNameIs
const myNameIs = ourObject.myNameIs.bind(newObject)

ourObject.myNameIs()
newObject.myNameIs()
myNameIs()
