import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String[] temp = br.readLine().split(" ");
		int earth = Integer.parseInt(temp[0]);
		int sun = Integer.parseInt(temp[1]);
		int moon = Integer.parseInt(temp[2]);

		int c_earth = 1, c_sun = 1, c_moon = 1;
		for(int year=1;;year++) {
			if(earth==c_earth && sun==c_sun && moon==c_moon) {
				System.out.println(year);
				break;
			}
			
			c_earth+=1;
			c_sun+=1;
			c_moon+=1;
			if(c_earth==16) {
				c_earth=1;
			}
			if(c_sun==29) {
				c_sun=1;
			}
			if(c_moon==20) {
				c_moon=1;
			}
		}
	}
}