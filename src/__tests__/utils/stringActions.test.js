import { removeExtraSpaces, removeExtraChars } from "../../utils/stringActions.js";

describe("tests for string actions script", () => {
  const extraSpacesMessage = 'remove extra spaces';

  it('should remove extra spaces in string (removeExtraSpaces(msg))', () => {
    expect(removeExtraSpaces(extraSpacesMessage)).toBe(extraSpacesMessage);
    expect(removeExtraSpaces('   remove   extra  spaces ')).toBe(extraSpacesMessage);
    expect(removeExtraSpaces('remove     extra spaces    ')).toBe(extraSpacesMessage);
    expect(removeExtraSpaces('         remove     extra        spaces    ')).toBe(extraSpacesMessage);
    expect(removeExtraSpaces('')).toBe('');
    expect(removeExtraSpaces('    ')).toBe('');
  });

  it('should remove extra chars in string (removeExtraChars(msg))', () => {
    expect(removeExtraChars('remove extra chars')).toBe('remove extra chars');
    expect(removeExtraChars('remove, extra... chars')).toBe('remove, extra... chars');
    expect(removeExtraChars('remove.#.. extra... .@..chars')).toBe('remove... extra... ...chars');
    expect(removeExtraChars('rem%ove# ex^tra @ch&&ars')).toBe('remove extra chars');
    expect(removeExtraChars('remove# ext$::ra @cha-=rs')).toBe('remove extra chars');
    expect(removeExtraChars('re%$move# extra @chars')).toBe('remove extra chars');
    expect(removeExtraChars('')).toBe('');
    expect(removeExtraChars('   ')).toBe('   ');
    expect(removeExtraChars('1 2 3 456 7 8 9')).toBe('1 2 3 456 7 8 9');
    expect(removeExtraChars('@1 2 $3 456 $7 8 9#')).toBe('1 2 3 456 7 8 9');
  });
  

});
