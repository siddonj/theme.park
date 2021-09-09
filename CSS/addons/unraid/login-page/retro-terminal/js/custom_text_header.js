
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// You must escape any backward slashes. "\\"

let custom_text_header = `
<div class="custom-text-header"> <pre>                     __                             ___       __  
   
    JJJ  OOOOO   SSSSS  HH   HH        NN   NN   AAA    SSSSS  
    JJJ OO   OO SS      HH   HH        NNN  NN  AAAAA  SS      
    JJJ OO   OO  SSSSS  HHHHHHH _____  NN N NN AA   AA  SSSSS  
JJ  JJJ OO   OO      SS HH   HH        NN  NNN AAAAAAA      SS 
 JJJJJ   OOOO0   SSSSS  HH   HH        NN   NN AA   AA  SSSSS  
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
