function solution(new_id) {
    var answer = '';
    function removeDot() {
        if(new_id.charAt(0)===".") new_id = new_id.substr(1);
        if(new_id.charAt(new_id.length-1)===".") new_id = new_id.substr(0, new_id.length-1);
    }
    
    new_id = new_id.toLowerCase().replace(/[^a-z0-9\-_.]/g, '').replace(/\.{2,}/g, '.');
    removeDot();
    if(new_id.length===0) new_id = "a";
    if(new_id.length>=16) {
        new_id = new_id.substr(0, 15);
        removeDot();
    }
    if(new_id.length<=2) {
        while(new_id.length<3) {
            new_id += new_id.charAt(new_id.length-1);
        }
    }
    
    return new_id;
}