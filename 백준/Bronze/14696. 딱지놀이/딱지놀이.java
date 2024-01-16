import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int number = Integer.parseInt(br.readLine());
		int[] a = new int[5];
		int[] b = new int[5];

		for (int i=0; i<number; i++) {
			for (int k=0; k<5; k++) {
				a[k] = 0;
				b[k] = 0;
			}
			String[] temp = br.readLine().split(" ");
			for (int n=1; n<=Integer.parseInt(temp[0]); n++) {
				a[Integer.parseInt(temp[n])] = 	a[Integer.parseInt(temp[n])] + 1;
			}
			temp = br.readLine().split(" ");
			for (int n=1; n<=Integer.parseInt(temp[0]); n++) {
				b[Integer.parseInt(temp[n])] = b[Integer.parseInt(temp[n])] + 1;
			}

			int index = 4;
			while(true) {
				if (a[index]>b[index]) {
					System.out.println("A");
					break;
				}
				else if (a[index]<b[index]) {
					System.out.println("B");
					break;
				}
				else {
					if (index>0)
						index--;
					else {
						System.out.println("D");
						break;
					}
				}
			}
		}
		br.close();
	}
}