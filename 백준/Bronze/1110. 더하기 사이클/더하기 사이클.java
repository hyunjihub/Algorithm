import java.util.Scanner;

public class Main {
	public static void main(String[] args) {

		Scanner input = new Scanner(System.in);
		int num = input.nextInt();
		int cycle = 0;
		int number = num;
		int first, second;
		
		while(true) {
			first = number/10;
			second = number%10;
			
			cycle++;
			number = (10*second)+((first+second)%10);
			if (cycle>=1 && number==num)
				break;
		}

		System.out.print(cycle);
		input.close();
	}
}