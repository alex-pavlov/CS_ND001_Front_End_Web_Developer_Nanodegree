// Relationships

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

// Try logging these functions to test your code!
console.log(getRelationship(1,4));
console.log(getRelationship(1,1));
console.log(getRelationship("that",2));
console.log(getRelationship("this"," something else"));
console.log(getRelationship(3));
console.log(getRelationship("hi"));
console.log(getRelationship(NaN));
console.log(getRelationship(NaN, undefined));



// Astronaut Arrays

var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];

function alphabetizer(names) {
    var reversedNames = [];
    // Your code goes here!
    for (name_index in names) {
        var name_surname = names[name_index].trim();
        var name = name_surname.slice(0, name_surname.indexOf(" "));
        var surname = name_surname.slice(name_surname.indexOf(" ") + 1);
        reversedNames.push(surname + ", " + name);
    }
    return reversedNames.sort();      
}

// Try logging your results to test your code!
console.log(alphabetizer(moonWalkers));



// Pagespeed Insights

// Iterate through the localizedRuleNames in ruleResults and 
// return an array of their strings.
function ruleList(results) {
    var output = [];
    for (var key in results.formattedResults.ruleResults){
        var localizedRuleName = results.formattedResults.ruleResults[key].localizedRuleName;        
        output.push(localizedRuleName);
    }
    return output;
}

// Iterate through pageStats in the psiResults object and 
// return the total number of bytes to load the website.
function totalBytes(results) {
    var number_of_bytes = 0;
    for (var key in  results.pageStats) {
        if (key.indexOf("Bytes") !== -1) {
            number_of_bytes = number_of_bytes + parseInt(results.pageStats[key], 10);            
        }
    }
    return number_of_bytes;
}

// Below, you'll find a sample PS Insights JSON
// and two console.log statements to help you test your code!

psinsights = {
 "kind": "pagespeedonline#result",
 "id": "/speed/pagespeed",
 "responseCode": 200,
 "title": "PageSpeed Home",
 "score": 90,
 "pageStats": {
  "numberResources": 22,
  "numberHosts": 7,
  "totalRequestBytes": "2761",
  "numberStaticResources": 16,
  "htmlResponseBytes": "91981",
  "cssResponseBytes": "37728",
  "imageResponseBytes": "13909",
  "javascriptResponseBytes": "247214",
  "otherResponseBytes": "8804",
  "numberJsResources": 6,
  "numberCssResources": 2
 },
 "formattedResults": {
  "locale": "en_US",
  "ruleResults": {
    "AvoidBadRequests": {
      "localizedRuleName": "Avoid bad requests",
      "ruleImpact": 0.0
    },
    "MinifyJavaScript": {
      "localizedRuleName": "Minify JavaScript",
      "ruleImpact": 0.1417,
      "urlBlocks": [
      {
        "header": {
       "format": "Minifying the following JavaScript resources could reduce their size by $1 ($2% reduction).",
       "args": [
        {
         "type": "BYTES",
         "value": "1.3KiB"
        },
        {
         "type": "INT_LITERAL",
         "value": "0"
        }
       ]
        },
        "urls": [
        {
          "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://code.google.com/js/codesite_tail.pack.04102009.js"
          },
          {
           "type": "BYTES",
           "value": "717B"
          },
          {
           "type": "INT_LITERAL",
           "value": "1"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://www.gmodules.com/ig/proxy?url\u003dhttp%3A%2F%2Fjqueryjs.googlecode.com%2Ffiles%2Fjquery-1.2.6.min.js"
          },
          {
           "type": "BYTES",
           "value": "258B"
          },
          {
           "type": "INT_LITERAL",
           "value": "0"
          }
         ]
        }
       }
      ]
     }
    ]
   },
   "SpriteImages": {
    "localizedRuleName": "Combine images into CSS sprites",
    "ruleImpact": 0.0
   }
  }
 },
 "version": {
  "major": 1,
  "minor": 11
 }
};

// Try logging the outputs below to test your code!
console.log(ruleList(psinsights));
console.log(totalBytes(psinsights));