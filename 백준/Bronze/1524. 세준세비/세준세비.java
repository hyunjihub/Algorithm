import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;

public class Main {
	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int number = Integer.parseInt(br.readLine());
		br.readLine();

		int sejun, sebi;
		ArrayList<Integer> sj_list = new ArrayList<>();
		ArrayList<Integer> sb_list = new ArrayList<>();
		for (int i=0; i<number; i++) {
			sj_list.clear();
			sb_list.clear();
			String[] temp = br.readLine().split(" ");
			sejun = Integer.parseInt(temp[0]);
			sebi = Integer.parseInt(temp[1]);
			temp = br.readLine().split(" ");
			for (int n=0; n<sejun; n++)
				sj_list.add(Integer.parseInt(temp[n]));
			temp = br.readLine().split(" ");
			for (int m=0; m<sebi; m++)
				sb_list.add(Integer.parseInt(temp[m]));

			Collections.sort(sj_list);
			Collections.sort(sb_list);
			while(true) {
				if (sj_list.size()==0 || sb_list.size()==0)
					break;
				if (sj_list.get(0) < sb_list.get(0))
					sj_list.remove(0);
				else if (sj_list.get(0) > sb_list.get(0))
					sb_list.remove(0);
				else
					sb_list.remove(0);
			}
			if (sj_list.size()==0)
				System.out.println("B");
			else if (sb_list.size()==0)
				System.out.println("S");
			else
				System.out.println("C");

			if(i!=number-1)
				br.readLine();
		}
		br.close();
	}
}