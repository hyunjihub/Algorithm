import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.Math;

public class Main {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String[] string = br.readLine().split(" ");
		
		int w = Integer.parseInt(string[0]);
		int h = Integer.parseInt(string[1]);
		int r = h/2;
		int x = Integer.parseInt(string[2]);
		int y = Integer.parseInt(string[3]);
		int p = Integer.parseInt(string[4]);
		
		int count = 0;
		
		for (int i=0; i<p; i++) {
			string = br.readLine().split(" ");
			int x1 = Integer.parseInt(string[0]);
			int y1 = Integer.parseInt(string[1]);
			
			if(x1<x) {
				int n = (int)Math.pow(x1-x, 2) + (int)Math.pow(y1-(y+r), 2);
				if (n<=(int)Math.pow(r, 2)) {
					count++;
				}
			}
			else if (x1>x+w) {
				int n = (int)Math.pow(x1-(x+w), 2) + (int)Math.pow(y1-(y+r), 2);
				if (n<=(int)Math.pow(r, 2)) {
					count++;
				}
			}
			else {
				if (((x1>=x)&&(x1<=x+w))&&((y1>=y)&&(y1<=y+h))) {
					count++;
				}
			}	
		}
		System.out.print(count);
	}
}
