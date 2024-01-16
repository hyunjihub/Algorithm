import java.util.Scanner;

public class Main {
	public static void main(String[] args) {

		Scanner input = new Scanner(System.in);
		String[] chess = new String[8];
		int white = 0;
		for (int i=0; i<8; i++) {
			chess[i] = input.nextLine();
		}

		for (int n=0; n<8; n++) {
			for (int m=0; m<8; m++) {
				char now = chess[n].charAt(m);
				if (now=='F') {
					if ((n==0 || (n%2)==0)) {				
						if (m==0 || (m%2)==0) {
							white++;
						}
					}
					else {
						if ((m%2)!=0) {
							white++;
						}
					}
				}
			}
		}
		System.out.print(white);
		input.close();
	}
}