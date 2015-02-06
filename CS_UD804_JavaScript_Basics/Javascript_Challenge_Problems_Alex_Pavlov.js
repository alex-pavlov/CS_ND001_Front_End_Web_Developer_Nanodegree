/**  
* getRelationship(x, y): 
*    Returns a string representing whether x is >, < or = y
*   
*  Arguments: 
*    x: a number
*    y: a number
*    
*  Return: 
*    A string representing whether x is >, < or = y.
*    - If one or both of the values aren't numbers, 
*      return "Can't compare relationships because [this value] and [that value] [is]/[are] not [a] number[s]."
*/
function getRelationship(x, y) {
    
    if ((isFinite(x) === false) && (typeof(x) !== "string") && (typeof(x) !== "undefined")) // fix NaN input
        x = "NaN";
    else if  ((isFinite(y) === false) && (typeof(y) !== "string") && (typeof(y) !== "undefined"))
        y = "NaN";

    if ((typeof(x) === "number") && (typeof(y) === "number")) {
        if (x < y)
            return "<";
        else if (x > y)
            return ">";
        else
            return "=";
    } else {
        if ((typeof(x) !== "number") && (typeof(y) !== "number"))
            return "Can't compare relationships because " + x + " and " + y + " are not numbers";
        else if ((typeof(x) !== "number"))
            return "Can't compare relationships because " + x + " is not a number";
        else
            return "Can't compare relationships because " + y + " is not a number";
                 
    }
}


/**   
*  alphabetizer(names): 
*    Returns an alphabetized array of names in lastname, firstname format
*   
*  Arguments: 
*    names: a names array (of length N) containing strings of names. Example: ["Neil Armstrong", "Buzz Aldrin"]
*    
*  Return: 
*    An alphabetized array of names in lastname, firstname format. Example: ['Armstrong, Neil', "Aldrin, Buzz"]  
*/
function alphabetizer(names) {
    var reversedNames = [];
    for (name_index in names) {
        var name_surname = names[name_index].trim();
        var name = name_surname.slice(0, name_surname.indexOf(" "));
        var surname = name_surname.slice(name_surname.indexOf(" ") + 1);
        reversedNames.push(surname + ", " + name);
    }
    return reversedNames.sort();      
}


/**   
*  ruleList(results): 
*    Iterates through the localizedRuleNames in ruleResults and returns an array of their strings.
*   
*  Arguments: 
*    results: a JSON of Google's PageSpeed Insights (PSI) which scores websites on their speed.
*    
*  Return: 
*    An array of strings which string is an advice how to optimize speed of a website.
*/
function ruleList(results) {
    var output = [];
    for (var key in results.formattedResults.ruleResults){
        var localizedRuleName = results.formattedResults.ruleResults[key].localizedRuleName;        
        output.push(localizedRuleName);
    }
    return output;
}


/**   
*  totalBytes(results): 
*    Iterates through pageStats in the psiResults object and returns the total number of bytes to load the website.
*   
*  Arguments: 
*    results: a JSON of Google's PageSpeed Insights (PSI) which scores websites on their speed.
*    
*  Return: 
*    A total number of bytes to load the website.
*/
function totalBytes(results) {
    var number_of_bytes = 0;
    for (var key in  results.pageStats) {
        if (key.indexOf("Bytes") !== -1) {
            number_of_bytes = number_of_bytes + parseInt(results.pageStats[key], 10);            
        }
    }
    return number_of_bytes;
}
