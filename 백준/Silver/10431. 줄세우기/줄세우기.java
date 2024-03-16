import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) throws IOException {

      BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int cases = Integer.parseInt(br.readLine());

        String[] input;
        ArrayList<Integer> list = new ArrayList<>();
        int current;
        int current_h;
        int count;
        for(int i=0; i<cases; i++) {
            count = 0;
            current = 1;
            list.clear();
            input = br.readLine().split(" ");
            for(int j=1; j<=20; j++) {
                list.add(Integer.parseInt(input[j]));
            }

            while(true) {
                if(current>=20) {
                    break;
                }

                for(int j=0; j<current; j++) {
                    current_h = list.get(current);
                    if(current_h<list.get(j)) {
                        count = count+current-j;
                        list.remove(current);
                        list.add(j, current_h);
                        current = j;
                    }
                }

                current++;
            }

            
            System.out.println(i+1 + " " + count);

        }
        
    }   
}