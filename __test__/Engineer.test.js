// using Engineer constructor 
const Engineer = require('../lib/Engineer');

// creating engineer object  
test('creates an Engineer object', () => {
    const engineer = new Engineer('Nicole', 90, 'nicole.elisaw@gmail', 'nicolewallace09');
    
    expect(engineer.github) .toEqual(expect.any(String));
});
