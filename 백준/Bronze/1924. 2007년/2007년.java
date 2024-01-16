import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String[] string = br.readLine().split(" ");
		int month = Integer.parseInt(string[0]);
		int day = Integer.parseInt(string[1]);
		int[] sum = {0, 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334};

		month = sum[month];
		if(month!=0) day = month+day;
		day = day%7;
		switch(day) {
		case 0: System.out.print("SUN");
		break;
		case 1: System.out.print("MON");
		break;
		case 2: System.out.print("TUE");
		break;
		case 3: System.out.print("WED");
		break;
		case 4: System.out.print("THU");
		break;
		case 5: System.out.print("FRI");
		break;
		default: System.out.print("SAT");
		break;
		}
	}
}