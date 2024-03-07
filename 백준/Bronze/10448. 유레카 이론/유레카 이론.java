import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;

public class Main {
        public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int test_case = Integer.parseInt(br.readLine());

        int number;

        ArrayList<Integer> array = new ArrayList<>();
        int cal;
        for (int i=1; ; i++) {
            cal = (i*(i+1))/2;
            if(cal>1000) break;
            else array.add(cal);
        }

        boolean Eureka;
        for(int i=0; i<test_case; i++) {
            Eureka = false;
            number = Integer.parseInt(br.readLine());
            for(int j=0; j<array.size(); j++) {
                for(int k=0; k<array.size(); k++) {
                    for(int l=0; l<array.size(); l++) {
                        cal = array.get(j)+array.get(k)+array.get(l);
                        if(cal==number) {
                            Eureka = true;
                            break;
                        }
                    }
                }
            }
            if(Eureka) {
                System.out.println(1);
            } else {
                System.out.println(0);
            }
        }

    }

}
