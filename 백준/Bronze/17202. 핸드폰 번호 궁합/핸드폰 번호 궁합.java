import java.util.Scanner;

public class Main {
	public static void main(String[] args) {

		Scanner input = new Scanner(System.in);
		String s1 = input.nextLine();
		String s2 = input.nextLine();
		int[] p_num1 = new int[8];
		int[] p_num2 = new int[8];
		int[] answer = new int[16];

		for (int i=0; i<8; i++) {
			p_num1[i] = s1.charAt(i)-'0';
			p_num2[i] = s2.charAt(i)-'0';
		}

		int size1 = 8; int size2 = 8; int index = 0;
		for (int n=0; n<8; n++) {
			answer[index++] = p_num1[n];
			answer[index++] = p_num2[n];
		}

		for (int k=0; k<14; k++) {
			index=0;
			for (int m=0; m<size1+size2-1; m++) {
				answer[index++] = (answer[m]+answer[m+1])%10;
			}
			if (k==0 || k%2==0) {
				size2--;
			}
			else
				size1--;
		}
		
		int chemistry = 10*answer[0]+answer[1];
		if (chemistry<10)
			System.out.print("0"+chemistry);
		else
			System.out.print(chemistry);

		input.close();
	}
}