import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;

public class Main {
	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		HashMap<Integer, Integer> map = new HashMap<>();

		int score;
		for (int i=0; i<8; i++) {
			score = Integer.parseInt(br.readLine());
			map.put(i, score);
		}

		List<Integer> keySet = new ArrayList<>(map.keySet());
		keySet.sort(new Comparator<Integer>() {

			@Override
			public int compare(Integer o1, Integer o2) {
				return map.get(o2).compareTo(map.get(o1));
			}

		});
		
		int sum = 0;
		int[] index = new int[5];
		for (int i=0; i<5; i++) {
			sum = sum + map.get(keySet.get(i));
			index[i] = keySet.get(i)+1;
		}
		Arrays.sort(index);
		System.out.println(sum);
		for (int i=0; i<5; i++) {
			if (i!=0) System.out.print(" ");
			System.out.print(index[i]);
		}
	}
}