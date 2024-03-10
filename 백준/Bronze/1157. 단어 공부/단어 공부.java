import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String input = br.readLine();
        input = input.toLowerCase();
        int[][] english = new int[26][2];

        for(int i=0; i<26; i++) {
            for(int j=0;j<2; j++) {
                english[i][j]=0;
            } 
        }

        for(int i=0; i<input.length(); i++) {
            english[input.charAt(i)-97][0]++;
            english[input.charAt(i)-97][1] = Character.toUpperCase(input.charAt(i));
        }

        Arrays.sort(english, (o1, o2) -> {
            return o1[0]-o2[0];
        });

        int max = english[25][0];
        if (max==english[24][0]) {
            System.out.print("?");
        } else {
            System.out.print((char)english[25][1]);
        }
    }   
}

