//https://leetcode.com/problems/permutation-in-string/submissions/

function checkInclusion(s1, s2) {
  if (s1.length > s2.length) {
      return false;
  }

  const s1Chars = Object.create(null);

  for (const ch of s1) {
      if (!(ch in s1Chars)) {
          s1Chars[ch] = 0;
      }
      ++s1Chars[ch];
  }

  const last = s2.length - s1.length;
  let i = 0;

  while (i <= last) {
      while (i <= last && !(s2[i] in s1Chars)) {
          ++i;
      }

      if (i > last) {
          return false;
      }

      const subChars = Object.create(null);
      let j = i;

      while (j < s2.length && s2[j] in s1Chars) {
          const ch = s2[j];

          if (!(ch in subChars)) {
              subChars[ch] = 0;
          }
          ++subChars[ch];

          if (subChars[ch] > s1Chars[ch]) {
              break;
          }

          ++j;
      }

      if (s1.length === j - i) {
          return true;
      }

      if (j < s2.length && s2[j] in s1Chars) {
          while (s2[i] !== s2[j]) {
              ++i;
          }
          ++i;
      } else {
          i = j;
      }
  }

  return false;
}