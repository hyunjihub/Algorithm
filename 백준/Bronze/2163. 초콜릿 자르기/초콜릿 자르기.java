import java.util.Scanner;

public class Main {
	public static void main(String[] args) {

		Scanner input = new Scanner(System.in);
		int n = input.nextInt();
		int m = input.nextInt();
		int count = 0;

		count = m * n - 1;
		System.out.println(count);	
		input.close();
	}
}