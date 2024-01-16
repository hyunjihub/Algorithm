import java.util.Scanner;

public class Main {
	public static void main(String[] args) {

		Scanner input = new Scanner(System.in);
		int x = input.nextInt();
		int sum = 0;
		int stick = 64;
		int count = 0;
		
		while(true) {
			count++;
			sum = sum + stick;
			if (sum==x) {
				System.out.println(count);
				break;
			}
			else if (sum>x) {
				sum = sum - stick;
				count--;
			}
			stick = stick/2;
		}
		
		input.close();
	}
}