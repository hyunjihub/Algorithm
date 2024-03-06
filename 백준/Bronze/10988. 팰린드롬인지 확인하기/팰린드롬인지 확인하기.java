import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String input = br.readLine();
        int length = input.length();

        String Front;
        String Back;

        if(length%2==0) {
            Front = input.substring(0, (length/2));
            Back = input.substring((length/2), length);
        } else {
            Front = input.substring(0, (length/2));
            Back = input.substring((length/2)+1, length);
        }
        
        
        StringBuffer str = new StringBuffer(Back);
        Back = str.reverse().toString();

        if(Front.equals(Back)) {
            System.out.print(1);
        } else {
            System.out.print(0);
        }
    }

}
