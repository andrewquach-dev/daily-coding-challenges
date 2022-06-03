//https://www.codewars.com/kata/582dace555a1f4d859000058/solutions/javascript/me/best_practice

function findAdmin(list, lang) {
    // thank you for checking out the Coding Meetup kata :)
    return list.filter(dev => dev.language === lang && dev.githubAdmin === 'yes')
    
  }