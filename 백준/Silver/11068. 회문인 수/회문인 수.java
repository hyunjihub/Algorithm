import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int cases = Integer.parseInt(br.readLine());

        int number;
        for(int i=0; i<cases; i++) {
            number = Integer.parseInt(br.readLine());
            if(isPalindrome(number)) {
                System.out.println("1");
            } else {
                System.out.println("0");
            }

        }
    }

    public static boolean isPalindrome(int number) {
        boolean isPalindrome = false;

        ArrayList<Integer> mod = new ArrayList<>();
        int start_number = number;
        int mid;

        for(int i=2; i<=64; i++) {
            mod.clear();
            number = start_number;
            while(true) {
                if(number==0) break;
                mod.add(number%i);
                number /= i;
            }

            mid = mod.size()/2;
            boolean check = true;
            for(int k=0; k<=mid; k++) {
                if(mod.get(k)!=mod.get(mod.size()-1-k)) {
                    check = false;
                    break;
                }
            }

            if(check) {
                isPalindrome = true;
                break;
            }
        }
        return isPalindrome;
    }
}
