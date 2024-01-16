import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		int num1 = input.nextInt();
		int num2 = input.nextInt();

		int num2_1 = num2%10;
		int num2_10 = (num2/10)%10;
		int num2_100 = num2/100;

		System.out.println(num1*num2_1);
		System.out.println(num1*num2_10);
		System.out.println(num1*num2_100);
		System.out.println(num1*num2);

		input.close();
	}
}