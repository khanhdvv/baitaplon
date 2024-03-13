public class Knapsack { 

  

    private static int n; // Số đồ vật 

    private static int b; // Trọng lượng tối đa của túi 

    private static int[][] dp; // Ma trận lưu trữ kết quả của các bài toán con 

    private static int[] a; // Mảng lưu trữ trọng lượng của các đồ vật 

    private static int[] c; // Mảng lưu trữ giá trị sử dụng của các đồ vật 

  

    public static void main(String[] args) { 

        n = 5; 

        b = 10; 

        a = new int[]{2, 1, 3, 4, 5}; 

        c = new int[]{3, 2, 4, 5, 6}; 

  

        dp = new int[n + 1][b + 1]; 

  

        for (int i = 0; i <= n; i++) { 

            for (int j = 0; j <= b; j++) { 

                if (i == 0 || j == 0) { 

                    dp[i][j] = 0; 

                } else if (a[i - 1] <= j) { 

                    dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - a[i - 1]] + c[i - 1]); 

                } else { 

                    dp[i][j] = dp[i - 1][j]; 

                } 

            } 

        } 

  

        // In ra kết quả 

        System.out.println("Giá trị sử dụng lớn nhất: " + dp[n][b]); 

    } 

} 

 