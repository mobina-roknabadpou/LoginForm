const VALID_EMAIL = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

describe('Email validation', () => {
  test('Valid email addresses should match', () => {
    const validEmails = [
        'm_roknabadpou@shatel.ir',
        'mobina.rp1380@gmail.com'
    ];

    validEmails.forEach(email => {
      expect(VALID_EMAIL.test(email)).toBe(true);
    });
  });

  test('Invalid email addresses should not match', () => {
    const invalidEmails = [
      'notanemail',
      'notanemail@',
    ];

    invalidEmails.forEach(email => {
      expect(VALID_EMAIL.test(email)).toBe(false);
    });
  });
});
