import java.io.*;
import java.util.*;

public class U{
    static void k(int n, int[] a){
        int freq;
        freq=0;
        for(int i=0;i<a.length;i++){
            for(int j=i+1;j<a.length;j++){
                while(a[i]==a[j]){
                    a[i]=a[j]=0;
                    freq++;
                }
            }
        }
        System.out.println(freq);
    }
    public static void main(String[] args) {
        System.out.println("Hi");
        int[] a={1,2,5,1,5,5,2,3};
        U.k(8,a);
    }
}