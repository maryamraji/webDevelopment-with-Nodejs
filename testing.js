const mocha = require('mocha');
const expect = require('expect')
describe('homepage', () => {    it('should respond to GET', (done) => {
    superagent.get(`http://localhost:${port}`)
              .end((error, response) => {  
                          expect(response.status).to.equal(200)          
                          done()      
                        }) 
                       }) 
                   })


// The  code above is BDD using expect keyword, testing for success of response                   
// Testing a string spilt into an array using TDD
const assert = require('assert') 
describe('String#split', () => {
    it('should return an array', () => { 
        assert(Array.isArray('a,b,c'.split(','))) 
    }) 
})
 //Testing if two arrays are of equal length
 const assert = require('assert') 
 const testArray = ['a','b','c']
 const testString = 'a,b,c' 
 describe('String#split', () => { 
    it('should return an array', () => { 
        assert(Array.isArray('a,b,c'.split(','))) 
    }) 
    it('should return the same array', () => { 
        assert.equal(testArray.length, 
            testString.split(',').length, 
            `arrays have equal length`) 
     
    for (let i = 0; i < testArray.length; i++) {
        assert.equal(testArray[i], testString.split(',')[i], 
        `i element is equal`) 
    } 
   }) 
})

//The code above with some abstractions
// # Mocha Guide to Testing
// Objective is to explain describe(), it(), and before()/etc hooks

// 1. `describe()` is merely for grouping, which you can nest as deep
// 2. `it()` is a test case
// 3. `before()`, `beforeEach()`, `after()`, `afterEach()` are hooks to run
// before/after first/each it() or describe().
//
// Which means, `before()` is run before first it()/describe()

// -----------------------------------------------------------------------------

// should.js is the preferred assertion library
var should = require('should');

// **Only 1 test case (in a nameless test suite)**
it('birds should fly', function(){
  /** here.should.be.tested
    * However, as long as no error within a it(),
    * it() is considered PASSED */
})


// **Only 1 test case, but nested 3-level deep**

// describe() are:
// - commonly known as test suites, which contains test cases
// - merely groups, and you can have groups within groups
describe('galaxy', function(){
  describe('earth', function(){
    describe('singapre', function(){
      it('birds should fly', function(){ /** ... */ })
    })
  })
})


// **2 test cases in 1 test suite**

// A common scenario.
describe('singapre', function(){
  it('birds should fly', function(){ /** ... */ })
  it('horse should gallop', function(){ /** ... */ })
})


// **Run once before the first test case**
describe('singapre', function(){
  before(function(){
    console.log('see.. this function is run ONCE only')
  })
  it('birds should fly', function(){ /** ... */ })
  it('horse should gallop', function(){ /** ... */ })
})


// **Run once before each test case**
describe('singapre', function(){
  beforeEach(function(){
    console.log('see.. this function is run EACH time')
  })
  it('birds should fly', function(){ /** ... */ })
  it('horse should gallop', function(){ /** ... */ })
})

// **2 test suites in a big test suite**

// A common scenario.
describe('earth', function(){
  describe('singapre', function(){
    it('birds should fly', function(){ /** ... */ })
  })
  describe('malaysia', function(){
    it('birds should soar', function(){ /** ... */ })
  })
})


// **before() can be applied to describe() too**
describe('earth', function(){
  before(function(){
    console.log('see.. this function is run ONCE only, before first describe()')
  })
  describe('singapre', function(){
    it('birds should fly', function(){ /** ... */ })
  })
  describe('malaysia', function(){
    it('birds should soar', function(){ /** ... */ })
  })
})


// **beforeEach() can be applied to describe() too**
describe('earth', function(){
  beforeEach(function(){
    console.log('see.. this function is run EACH time, before each describe()')
  })
  describe('singapre', function(){
    it('birds should fly', function(){ /** ... */ })
  })
  describe('malaysia', function(){
    it('birds should soar', function(){ /** ... */ })
  })
})

/*before(): syntax is same as describe() and it() but first argument is optional. It runs once before first it() or describe().*/
describe('name of suite', () => {
    before(() => {
       //Will execute only once before first it is executed here.
    });
    it('Test 1', () => {
       //test body here
    });
    it('Test 2', () => {
       //test body here
    });
 });

 /*beforeEach(): syntax is same as before(). It runs before each it() or describe().*/
 describe('name of suite', () => {
    beforeEach(() => {
       //Will execute before each it below.So total twice here.
    });
    it('Test 1', () => {
       //test body here
    });
    it('Test 2', () => {
       //test body here
    });
 });

 /*after(): syntax is same as before(). It runs once after last it() or describe().*/

 describe('name of suite', () => {
    it('Test 1', () => {
       //test body here
    });
    it('Test 2', () => {
       //test body here
    });
    after(() => {
       //Will execute only once after last it is executed here.
    });
 });

 /*afterEach(): syntax is same as before(). It runs after each it() or describe().*/

 it('Test 1', () => {
    //test body here
 });
 it('Test 2', () => {
    //test body here
 });
 afterEach(() => {
    //Will execute after each it is executed.So total twice here.
 });

/*Tests can appear before, after, or interspersed with your hooks. Hooks will run in the order they are defined, as appropriate; all before() hooks run (once), then any beforeEach() hooks, tests, any afterEach() hooks, and finally after() hooks (once).*/
/*Step 4: Inclusion and Exclusion of tests-
Mocha gives you two option to run tests selectively-
only(): use it with any it() or describe() to run only those tests or suites.*/
describe('name of suite', () => {
    it.only('Test 1', () => {
      //test body here
    });
    it('Test 2', () => {
      //test body here
    });
});
//Here only Test 1 will run 

//skip(): use it with any it() or describe() to skip those tests or suites.
describe('name of suite', () => {
    it.skip('Test 1', () => {
      //test body here
    });
    it('Test 2', () => {
      //test body here
    });
});
//Here only Test 2 will run and Test 1 will get skipped and marked as pending.
//Example code
/Require this built in node.js library to assert values
const assert = require('assert');

var calculateSavings = (income, expenditure) => {
    return income - expenditure;
}
describe('Savings suite', () => {
    var income, expenditure, monthlySaving, totalSaving;
    before(() => {
        //Set all values to 0 and set Income to 1000
        income = 1000;
        expenditure = 0;
        monthlySaving = 0;
        totalSaving = 0;
    });
    beforeEach(() => {
        //Randomly generate an expenditure before each test 
        expenditure = Math.floor((Math.random() * 500) + 1);
    });
    after(() => {
        //Reset all values to 0 after all tests are run
        income = 0;
        expenditure = 0;
        monthlySaving = 0;
        totalSaving = 0;
    });
    afterEach(() => {
        //Add monthlySaving to totalSaving after each test
        totalSaving = totalSaving + monthlySaving;
    });
    it('should test savings of Month 1', () => {
        monthlySaving = calculateSavings(income, expenditure);
        assert.equal(monthlySaving, income - expenditure);
    });
    it('should compare savings of Month 2 to totalSavings', () => {
        monthlySaving = calculateSavings(income, expenditure);
        assert.notEqual(monthlySaving, totalSaving);
    });
});

