import java.util.ArrayList; 

import java.util.List; 

import java.util.Stack; 

  

public class DFS { 

  

    private static List<Integer> adjList[]; 

    private static boolean visited[]; 

  

    public static void main(String[] args) { 

        int n = 5; // Số lượng đỉnh 

        adjList = new ArrayList[n]; 

        for (int i = 0; i < n; i++) { 

            adjList[i] = new ArrayList<>(); 

        } 

  

        // Thêm các cạnh vào danh sách kề 

        addEdge(0, 1); 

        addEdge(0, 2); 

        addEdge(1, 3); 

        addEdge(1, 4); 

        addEdge(2, 4); 

  

        // Duyệt DFS từ đỉnh 0 

        visited = new boolean[n]; 

        dfs(0); 

  

        // In kết quả 

        for (int i = 0; i < n; i++) { 

            if (visited[i]) { 

                System.out.print(i + " "); 

            } 

        } 

        System.out.println(); 

    } 

  

    private static void dfs(int u) { 

        visited[u] = true; 

        System.out.print(u + " "); 

  

        for (int v : adjList[u]) { 

            if (!visited[v]) { 

                dfs(v); 

            } 

        } 

    } 

  

    private static void addEdge(int u, int v) { 

        adjList[u].add(v); 

        adjList[v].add(u); 

    } 

} 

 