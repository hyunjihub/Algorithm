import java.util.Scanner;

public class Main {
	public static void main(String[] args) {

		Scanner input1 = new Scanner(System.in);
		int num = input1.nextInt();

		for(int i=0; i<num; i++) {
			int[] array = new int[7];
			int sum = 0;
			int even = 101;
			for (int n=0; n<7; n++) {
				array[n] = input1.nextInt();

				if (array[n]%2==0) {
					if (even > array[n])
						even = array[n];
					sum = sum + array[n];
				}
			}

			System.out.println(sum + " " + even);
		}
        input1.close();
	}
}