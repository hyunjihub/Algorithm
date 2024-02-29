import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int input = Integer.parseInt(br.readLine());

        for(int i=1; i<2*input; i++) {
            if(i<=input) {
                for(int j=1; j<2*input; j++) {
                    if(j==input) {
                        System.out.print("*");
                    } else if (j<input){
                        if(input-i+1>j) {
                            System.out.print(" ");
                        } else {
                            System.out.print("*");
                        }
                    } else {
                        if(input-i+1>(2*input)-j) {
                        } else {
                            System.out.print("*");
                        }
                    }
                }
            } else {
                for(int j=1; j<2*input; j++) {
                    if(j==input) {
                        System.out.print("*");
                    } else if(j<input){
                        if(i-input > j-1) {
                            System.out.print(" ");
                        } else {
                            System.out.print("*");
                        }
                    } else {
                        if(i-input > 2*input-1-j) {
                        } else {
                            System.out.print("*");
                        }
                    }
                }
            }
            System.out.println();
        }
    }   
}

