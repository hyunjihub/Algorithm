import java.util.Scanner;

public class Main {
	public static void main(String[] args) {

		Scanner input = new Scanner(System.in);
		int number = input.nextInt();
		int[][] paper = new int[101][101];
		int x, y, size=0;
		for (int i=0; i<number; i++) {
			x =  input.nextInt();
			y =  input.nextInt();
			for (int k=x; k<x+10; k++) {
				for (int j=y; j<y+10; j++) {
					paper[k][j] = 1;
				}
			}
		}
		
		for (int i=0; i<101; i++) {
			for (int j=0; j<101; j++) {
				if (paper[i][j]==1)
					size++;
			}
		}

		System.out.print(size);
		input.close();
	}
}