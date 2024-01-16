import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.LinkedList;

public class Main {
	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int number = Integer.parseInt(br.readLine());
		int[] a = new int[number];
		LinkedList<Integer> b = new LinkedList<>();
		int[] a_change = new int[number];

		String[] string = br.readLine().split(" ");
		for (int i=0; i<number; i++)
			a[i] = Integer.parseInt(string[i]);
		string = br.readLine().split(" ");
		for (int i=0; i<number; i++)
			b.add(Integer.parseInt(string[i]));

		Arrays.sort(a);
		int max = 0;
		int index = 0;
		int m_index = 0;
		int sum = 0;
		while(index<number) {
			max = 0;
			for (int i=0; i<b.size(); i++) {
				if (max<=b.get(i)) {
					max = b.get(i);
					m_index = i;
				}
			}
			sum += a[index++] * max;
			b.remove(m_index);
		}

		System.out.print(sum);
	}
}