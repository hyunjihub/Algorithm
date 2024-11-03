function solution(m, musicinfos) {
    var answer = '(None)';
    let longerTime = 0;
    
    m = m.replaceAll("C#", "H").replaceAll("D#", "I").replaceAll("F#", "J").replaceAll("G#", "K").replaceAll("A#", "L").replaceAll("B#", "M");
    
    for(let i = 0; i < musicinfos.length; i++) {
        let [start, end, title, melody] = musicinfos[i].split(",");
        let [startH, startM] = start.split(":").map(Number);
        let [endH, endM] = end.split(":").map(Number);
        let playTime = (endH * 60 + endM) - (startH * 60 + startM);
        
        melody = melody.replaceAll("C#", "H").replaceAll("D#", "I").replaceAll("F#", "J").replaceAll("G#", "K").replaceAll("A#", "L").replaceAll("B#", "M");

        let playedMelody = melody.repeat(Math.ceil(playTime/melody.length)).slice(0, playTime);
        
        if (playedMelody.indexOf(m) !== -1) {
            if (playTime > longerTime) {
                longerTime = playTime;
                answer = title;
            }
        }
    }
    
    return answer;
}
