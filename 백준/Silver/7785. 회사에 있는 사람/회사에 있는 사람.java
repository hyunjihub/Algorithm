import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;

public class Main {
	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int number = Integer.parseInt(br.readLine());
		String[] string;

		HashSet<String> set = new HashSet<>();
		for(int i=0; i<number; i++) {
			string = br.readLine().split(" ");
			if(string[1].equals("enter")) {
					set.add(string[0]);
			}
			else {
					set.remove(string[0]);
			}
		}
		
		ArrayList<String> list = new ArrayList<String>(set); 
		Collections.sort(list);
		for (int i=list.size()-1; i>=0; i--) {
			System.out.println(list.get(i));
		}
	}
}