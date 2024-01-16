import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;

public class Main {
	
	static ArrayList<Integer> list = new ArrayList<>();
	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int number = Integer.parseInt(br.readLine());
		int k = Integer.parseInt(br.readLine());
		int[] card = new int[number];
		for (int i=0; i<number; i++) {
			card[i] = Integer.parseInt(br.readLine());
		}
		
		per1(card, 0, number, k);
		System.out.print(list.size());
	}
	
	static void per1(int[] arr, int depth, int n, int r) {
		String string = "";
		int change = 0;
		if(depth == r) {
			string = "";
			for(int i = 0; i < r; i++) {
				string = string+Integer.toString(arr[i]);
			}
			change = Integer.parseInt(string);
			if (!list.contains(change)) list.add(change);
			return;
		}

		for(int i=depth; i<n; i++) {
			swap(arr, depth, i);
			per1(arr, depth + 1, n, r);
			swap(arr, depth, i);
		}
	}
	
	static void swap(int[] arr, int depth, int i) {
		int temp = arr[depth];
		arr[depth] = arr[i];
		arr[i] = temp;
	}
}