var recipes = new Object()

function updateObjectWithKeyAndValue(object, key, value) {
  var newObject = Object.assign({},object,{ [key]: value })
  return newObject
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var newObject = Object.assign({}, object)
  delete newObject[key]
  return object
}

function destructivelyDeleteFromObjectByKey(object,key) {
  delete object[key]
  return object
}
