// Write a function that converts user entered date formatted as M/D/YYYY to a format required by an API (YYYYMMDD).
// The parameter "userDate" and the return value are strings.
//
//     For example, it should convert user entered date "12/31/2014" to "20141231" suitable for the API.


function formatDate(userDate) {
    // format from M/D/YYYY to YYYYMMDD
    var date = userDate.split('/');
    return (date[2]+date[0]+date[1]);
}

console.log(formatDate("12/31/2014"));
