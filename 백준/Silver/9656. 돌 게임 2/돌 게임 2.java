import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int N = Integer.parseInt(br.readLine());

        ArrayList<String> win = new ArrayList<>();
        win.add("CY");
        win.add("SK");
        win.add("CY");

        int index = 3;
        if(N>3) {
            while (win.size()<N) {
                if(win.get(index-1)==win.get(index-3)) {
                    if(win.get(index-1)=="CY") {
                        win.add("SK");
                    } else {
                        win.add("CY");
                    }
                } else {
                    win.add("SK");
                }
                index++;
            }
        }
        
        System.out.print(win.get(N-1));
    }
}
