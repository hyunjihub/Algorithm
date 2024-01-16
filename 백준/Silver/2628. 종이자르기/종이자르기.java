import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;

public class Main {
	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String[] string = br.readLine().split(" ");
		int width = Integer.parseInt(string[0]);
		int height = Integer.parseInt(string[1]);
		int num = Integer.parseInt(br.readLine());
		ArrayList<Integer> heights = new ArrayList<>();
		ArrayList<Integer> widths = new ArrayList<>();
		
		for (int i=0; i<num; i++) {
			string = br.readLine().split(" ");
			if(Integer.parseInt(string[0])==0) {
				heights.add(Integer.parseInt(string[1]));
			}
			else {
				widths.add(Integer.parseInt(string[1]));
			}
		}
		
		heights.add(height);
		widths.add(width);
		
		Collections.sort(heights);
		Collections.sort(widths);
		
		int current_h = 0;
		int current_w;
		int size_h, size_w;
		int max = 0;
		for (int i=0; i<heights.size(); i++) {
			current_w = 0;
			size_h = heights.get(i)-current_h;
			current_h = heights.get(i);
			for (int j=0; j<widths.size(); j++) {
				size_w = widths.get(j)-current_w;
				current_w = widths.get(j);
				if(max<size_w*size_h) {
					max = size_w*size_h;
				}
			}
		}
		
		System.out.print(max);
	}
}