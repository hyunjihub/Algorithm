import java.util.Scanner;

public class Main {
	public static void main(String[] args) {

		Scanner input = new Scanner(System.in);
		int number = input.nextInt();
		int[] cow = new int[11];
		for (int i=0; i<11; i++) {
			cow[i] = 2;
		}

		int count = 0;

		for (int n=0; n<number; n++) {
			int index = input.nextInt();
			int location = input.nextInt();
			if (cow[index]==2) {
				cow[index] = location;
			}
			else if (cow[index]==1) {
				if (location==0) {
					count++;
					cow[index] = location;
				}
			}
			else if (cow[index]==0) {
				if (location==1) {
					count++;
					cow[index] = location;
				}
			}

		}

		System.out.print(count);
		input.close();
	}
}