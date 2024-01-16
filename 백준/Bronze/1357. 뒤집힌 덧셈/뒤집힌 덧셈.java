import java.util.Scanner;

public class Main {
	public static void main(String[] args) {

		Scanner input = new Scanner(System.in);
		int x = input.nextInt();
		int y = input.nextInt();
		System.out.print(rev(rev(x)+rev(y)));

		input.close();

	}

	public static int rev(int x) {

		int num_1000 = 0, num_100=0, num_10=0, num_1=0;

		if (9<x && x<100) {
			num_10 = x/10;
			num_1 = x%10;
			return (10*num_1)+num_10;
		}
		else if (x<10) {
			return x;
		}
		else if (99<x && x<1000){
			num_100 = x/100;
			num_1 = (x%100)%10;
			num_10 = (x-(100*num_100)-num_1)/10;
			return (100*num_1)+(10*num_10)+num_100;
		}
		else if (x==1000) {
			return 1;
		}
		else {
			num_1000 = x/1000;
			num_100 = (x%1000)/100;
			num_10 = (x-(1000*num_1000)-(100*num_100))/10;
			num_1 = (x%1000)-(100*num_100)-(10*num_10);
			return (1000*num_1)+(100*num_10)+(10*num_100)+num_1000;
		}
	}
}