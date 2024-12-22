function solution(w, h) {
    function GCD(a, b) {
        let mod = a%b;
        if(mod===0) return b;
        return GCD(b, mod);
    }
    
    return w*h-(w+h-GCD(w, h));
}