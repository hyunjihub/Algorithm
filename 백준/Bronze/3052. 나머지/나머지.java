import java.util.Scanner;

public class Main {
	public static void main(String[] args) {

		Scanner input = new Scanner(System.in);
		int[] array = new int[10];
		int[] remainder = new int[10];
		int[] check = new int[10];
		for (int n=0; n<10; n++) {
			check[n] = 1001;
		}
		int answer = 1;
		
		for (int i=0; i<10; i++) {
			array[i] = input.nextInt();
			remainder[i] = array[i]%42;
		}
		
		check[0] = remainder[0];
		for (int m=1; m<10; m++) {
			boolean same = false;
			for (int k=0; k<10; k++) {
				if (check[k]==remainder[m])
					same = true;
			}
			if (!same)
				check[answer++] = remainder[m];
		}
		
		System.out.print(answer);
		input.close();
	}
}