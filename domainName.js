// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github"
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

 function domainName2(url){
   //your code here
   if(url.indexOf('//') > 0){
     return url.split('/')[2].split('.')[0] == 'www' ? url.split('/')[2].split('.')[1] : url.split('/')[2].split('.')[0];
    }
   else {
     return url.split('.')[0] == 'www' ? url.split('.')[1] : url.split('.')[0];
    }
   //if(url.indexOf > )

}
 console.log(domainName("http://github.com/carbonfive/raygun"));
 console.log(domainName("http://www.zombie-bites.com"));
 console.log(domainName("https://www.cnet.com"));

 console.log(domainName("http://google.com"));
 console.log(domainName("http://google.co.jp"));
 console.log(domainName("www.xakep.ru"));
 console.log(domainName("https://youtube.com"));

 function domainName(url){
   url = url.replace("https://", '');
   url = url.replace("http://", '');
   url = url.replace("www.", '');
   return url.split('.')[0];
 };
