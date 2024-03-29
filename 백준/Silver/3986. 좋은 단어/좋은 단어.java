import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;

public class Main {
    public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int cases = Integer.parseInt(br.readLine());

        int good = 0;
        String word;
        char prev;
        for(int i=0; i<cases; i++) {
            prev = ' ';
            word = br.readLine();
            Stack<Character> stack = new Stack<>();
            for(int j=0; j<word.length(); j++) {
                if(stack.isEmpty()) {
                    stack.push(word.charAt(j));
                    prev = word.charAt(j);
                } else {
                    if(prev==word.charAt(j)) {
                        stack.pop();
                        if(!stack.isEmpty()) {
                            prev = stack.peek();
                        }
                    } else {
                        stack.push(word.charAt(j));
                        prev = word.charAt(j);
                    }
                }
            }
            if(stack.isEmpty()) {
                good++;
            }
        }
        System.out.print(good);
    }


}
