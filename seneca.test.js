// First require (e.g., load) our seneca.js module
var seneca = require('./seneca');

/**
 * Tests for seneca.isValidEmail()
 */
describe('seneca.isValidEmail()', function() {

  test('returns true for simple myseneca address', function() {
   var simpleEmail = 'someone@myseneca.ca';
   expect(seneca.isValidEmail(simpleEmail)).toBe(true);
  });

  test('returns true for seneca teacher address', function() {
   var teachEmail = 'david.humphrey@senecacollege.ca';
   expect(seneca.isValidEmail(teachEmail)).toBe(true);
  });

  test('returns true for old seneca teacher address', function() {
   var oldTeachEmail = 'david.humphrey@senecac.on.ca';
   expect(seneca.isValidEmail(oldTeachEmail)).toBe(true);
  });

  test('returns false for a non-myseneca address', function() {
   var gmailAddress = 'someone@gmail.com';
   expect(seneca.isValidEmail(gmailAddress)).toBe(false);
  });

});

/**
 * Tests for seneca.formatSenecaEmail()
 */
describe('seneca.formatSenecaEmail()', function() {

  test('adds @myseneca.ca to the end of name', function() {
   var name = "mshaw";
   expect(seneca.formatSenecaEmail(name)).toBe('mshaw@myseneca.ca');
  });

  test('returns false for a null email', function(){
          var name = null;
          expect(seneca.formatSenecaEmail(name)).toBe(false);
  });

});
