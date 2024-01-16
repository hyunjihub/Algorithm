import java.util.Scanner;
import java.util.ArrayList;

public class Main {
	public static void main(String[] args) {

		Scanner input = new Scanner(System.in);
		ArrayList<String> list = new ArrayList<String>();
		while(true) {
			String num = input.next();
			int temp = Integer.parseInt(num);
			if (temp!=0)
				list.add(num);
			else {
				break;
			}
		}
		
		for (int i=0; i<list.size(); i++) {
			boolean check = true;
			String number = list.get(i);
			for(int n=0; n<number.length(); n++) {
				if (number.charAt(n)!=number.charAt(number.length()-1-n)) {
					check = false;
				}
			}
			if (check) {
				System.out.println("yes");
			}
			else {
				System.out.println("no");
			}
		}
		input.close();
		
	}
}