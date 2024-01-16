import java.util.Scanner;

public class Main {
	public static void main(String[] args) {

		Scanner input = new Scanner(System.in);
		int num = input.nextInt();
		
		String[] files = new String[num];
		
		for(int i=0; i<num; i++) {
			files[i] = input.next();
		}
		
		int length = files[0].length();
		boolean[] check = new boolean[length];
		for (int m=0; m<num-1; m++) {
			for (int n=0; n<length; n++) {
				if (files[m].charAt(n)!=files[m+1].charAt(n)) {
					check[n] = true;
				}
			}
		}
			
		for (int k=0; k<length; k++) {
			if (check[k]) {
				System.out.print("?");
			}
			else {
				System.out.print(files[0].charAt(k));
			}
		}
		
		input.close();
		
	}
}