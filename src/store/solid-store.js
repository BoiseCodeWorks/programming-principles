var state = {
  solid:{
  s: { name: 'Single Responsibility Principle', description: '' },
  o: { name: 'Open/Closed Principle', description: '' },
  l: { name: 'Liskov Substitution Principle', description: '' },
  i: { name: 'Interface Segregation Principle', description: '' },
  d: { name: 'Dependency Inversion', description: '', link: '' }
},
crud:{
  c: { name: 'Create', description: '' },
  r: { name: 'Open/Closed Principle', description: '' },
  u: { name: 'Liskov Substitution Principle', description: '' },
  d: { name: 'Dependency Inversion', description: '', link: '' }
  },
http:{
  post: { name: 'Single Responsibility Principle', description: '' },
  delete: { name: 'Open/Closed Principle', description: '' },
  put: { name: 'Liskov Substitution Principle', description: '' },
  get: { name: 'Dependency Inversion', description: '', link: '' },
  patch: { name: 'Dependency Inversion', description: '', link: '' }
  }
}

// Write a public function that will return a property of the state from its prop name
// PUBLIC PARTS
export default {
  getPrinciple(letter){
    return state.solid[letter.toLowerCase()] || {name: 'ERROR', description: 'INVALID ROUTE'}
  },getCrud(letter){
    return state.crud[letter.toLowerCase()] || {name: 'ERROR', description: 'INVALID ROUTE'}
  },getHttp(word){
    return state.http[word.toLowerCase()] || {name: 'ERROR', description: 'INVALID ROUTE'}
  }
}