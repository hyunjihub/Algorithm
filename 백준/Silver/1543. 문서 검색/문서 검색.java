import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
        public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String string = br.readLine();
        String find = br.readLine();

        int count = 0;
        String check = "";
        for(int i=0; i<string.length(); i++) {
            check = "";
            if(find.length()<=string.length()-i) {
                for(int j=0; j<find.length(); j++) {
                    check += string.charAt(i+j);
                }
                if(check.equals(find)) {
                    count++;
                    i = i+find.length()-1;
                }
            }
        }
        System.out.print(count);
    }   
}
