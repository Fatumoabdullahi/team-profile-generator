// using Intern constructor 
const Intern = require('../lib/Intern');

// creating intern object  
test('creates an Intern object', () => {
    const intern = new Intern('Fatumo', 23, 'fatumoabdullahi@outlook.com', 'UoB');
    
    expect(intern.school) .toEqual(expect.any(String));
});

