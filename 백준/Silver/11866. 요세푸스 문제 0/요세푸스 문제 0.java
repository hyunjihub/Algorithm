import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;

public class Main {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String[] string = br.readLine().split(" ");
		
		int N = Integer.parseInt(string[0]);
		int K = Integer.parseInt(string[1]);
		ArrayList<Integer> list = new ArrayList<>();
		for(int i=0; i<N; i++) {
			list.add(i);
		}
		
		System.out.print("<");
		int count = 0;
		int step = 0;
		
		for (int index=0;;index++) {
			if(count==N) break;
			if(list.get(index)!=null) {
				step++;
			}
			if(step%K==0 && list.get(index)!=null) {
				System.out.print(list.get(index)+1);
				list.set(index, null);
				count++;
				if(count!=N)System.out.print(", ");
			}
			if(index==N-1) index = -1;
		}
		System.out.print(">");
	}
}