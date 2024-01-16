import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;


public class Main {
	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int number = Integer.parseInt(br.readLine());
		double sum, avg, count;
		int size;
		for (int i=0; i<number; i++) {
			String[] score = br.readLine().split(" ");
			sum = 0;
			size = Integer.parseInt(score[0]);
			for (int n=1; n<=size; n++) {
				sum = Double.parseDouble(score[n]) + sum;
			}
			avg = sum/size;
			count = 0;
			
			for (int m=1; m<=size; m++) {
				if (Double.parseDouble(score[m])>avg)
					count++;
			}
			System.out.print(String.format("%.3f", ((count/size)*100)));
			System.out.println("%");
		}
	}
}