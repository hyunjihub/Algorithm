import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		int group = 0;
		while(true) {
			int number = Integer.parseInt(br.readLine());
			if(number==0) break;
			group++;
			if(group>1) System.out.println();
			System.out.println("Group " + group);
			String[] name = new String[number];
			String[][] credit = new String[number][number-1];
			String[] temp;
			for (int i=0; i<number; i++) {
				temp = br.readLine().split(" ");
				name[i] = temp[0];
				for(int k=0; k<number-1; k++) {
					credit[i][k] = temp[k+1];
				}
			}

			int bad = 0;
			int sad = 0;
			int negative = 0;
			for (int i=0; i<number; i++) {
				for (int k=0; k<number-1; k++) {
					if (credit[i][k].equalsIgnoreCase("N")) {
						negative++;
						sad = i;
                        if(i-k<=0) {
							bad = number-1+i-k;
						}
						else {
							bad = i-k-1;
						}
						System.out.println(name[bad] + " was nasty about " + name[sad]);
					}	
				}
			}
			if(negative==0) System.out.println("Nobody was nasty");
		}

	}
}
