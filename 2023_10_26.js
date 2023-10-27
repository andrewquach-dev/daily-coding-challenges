//https://leetcode.com/problems/unique-email-addresses/

var numUniqueEmails = function (emails) {

    let uniqueEmails = new Set();  // to store unique email addresses

    for (let email of emails) {

        let [local, domain] = email.split('@');  // split local and domain parts

        local = local.replace(/\./g, '');  // remove dots from local part

        let plusIndex = local.indexOf('+');  // find index of plus sign

        if (plusIndex !== -1) {

            local = local.substring(0, plusIndex); // remove everything after plus sign
        }

        uniqueEmails.add(local + '@' + domain); // add modified email to set
    }

    return uniqueEmails.size; // return number of unique email addresses

};