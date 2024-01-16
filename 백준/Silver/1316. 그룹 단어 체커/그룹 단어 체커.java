import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;

public class Main {
	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int number = Integer.parseInt(br.readLine());
		String[] string = new String[number];
		for (int i=0; i<number; i++) {
			string[i] = br.readLine();
		}

		int count = 0;
		int index;
		char current;
		boolean no;
		ArrayList<Character> list = new ArrayList<>();
		for (int i=0; i<number; i++) {
			no = false;
			index = 1;
			list.clear();
			list.add(string[i].charAt(0));
			current = string[i].charAt(0);
			while(index<string[i].length()) {
				if(current!=string[i].charAt(index) && !list.contains(string[i].charAt(index))) {
					list.add(string[i].charAt(index));
					current = string[i].charAt(index);
					index++;
				}
				else if (current!=string[i].charAt(index) && list.contains(string[i].charAt(index))) {
					no = true;
					index = string[i].length();
				}
				else if (current==string[i].charAt(index)) {
					index++;
				}
			}
			if(!no) count++;
		}
		System.out.print(count);
	}
}