import java.util.Scanner;

public class Main {
	public static void main(String[] args) {

		Scanner input = new Scanner(System.in);
		int number = input.nextInt();
		String[] name = new String[number];

		for (int i=0; i<number; i++) {
			name[i] = input.next();
		}

		boolean increasing = false;
		boolean decreasing = false;
		boolean neither = false;
		if (name[0].compareTo(name[1])<0) {
			increasing = true;
			for (int i=1; i<number-1; i++) {
				if (name[i].compareTo(name[i+1])>0) {
					increasing = false;
					neither = true;
					break;
				}
			}
		}
		else {
			decreasing = true;
			for (int i=1; i<number-1; i++) {
				if (name[i].compareTo(name[i+1])<0) {
					decreasing = false;
					neither = true;
					break;
				}
			}
		}

		if (increasing) {
			System.out.print("INCREASING");
		}
		else if (decreasing) {
			System.out.print("DECREASING");
		}
		else {
			System.out.print("NEITHER");
		}

		input.close();
	}
}
