import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    
        public static void main(String[] args) throws IOException {
    
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String[] price = br.readLine().split(" ");
        
        String[] first = br.readLine().split(" ");
        String[] second = br.readLine().split(" ");
        String[] third = br.readLine().split(" ");

        int count = 0;
        int start = Math.min(Math.min(Integer.parseInt(first[0]), Integer.parseInt(second[0])), Integer.parseInt(third[0]));
        int end = Math.max(Math.max(Integer.parseInt(first[1]), Integer.parseInt(second[1])), Integer.parseInt(third[1]));

        int parking_fee = 0;
        for(int i=start; i<=end; i++) {
            if(Integer.parseInt(first[0])==i) {
                count++;
            }
            if((Integer.parseInt(second[0])==i)) {
                count++;
            }
            if((Integer.parseInt(third[0])==i)) {
                count++;
            }

            if(Integer.parseInt(first[1])==i) {
                count--;
            }
            if(Integer.parseInt(second[1])==i) {
                count--;
            }
            if(Integer.parseInt(third[1])==i) {
                count--;
            }

            if(count==1) {
                parking_fee += Integer.parseInt(price[0]);
            } else if(count==2) {
                parking_fee += Integer.parseInt(price[1])*2;
            } else if(count==3) {
                parking_fee += Integer.parseInt(price[2])*3;
            }
        }

        System.out.print(parking_fee);


    }

    
}
