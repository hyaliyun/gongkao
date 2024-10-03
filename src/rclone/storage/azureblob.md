- [1. 算法](#1-算法)
  - [1.1. 图论](#11-图论)
    - [1.1.1. 可图性判断](#111-可图性判断)
    - [1.1.2. 并查集](#112-并查集)
- [2. C++ 标准库](#2-c-标准库)
  - [2.1. \<algorithm\>](#21-algorithm)
  - [2.2. \<cmath\>](#22-cmath)
  - [2.3. \<cstdlib\>](#23-cstdlib)
  - [2.4. \<iomanip\>](#24-iomanip)
  - [2.5. Lambda](#25-lambda)
  - [2.6. \<numeric\>](#26-numeric)
  - [2.7. \<string\>](#27-string)
- [3. Java 大数](#3-java-大数)

# 1. 算法

## 1.1. 图论

### 1.1.1. 可图性判断

```C++
#include <vector>
#include <algorithm>

using namespace std;

bool isGraph(vector<int> &V){
    if(V.empty()){
        return true;
    }
    sort(V.rbegin(), V.rend());
    while(V.front() != 0){
        int degree = V.front();
        for(int i = 0; i < degree; ++i){
            if(i + 1 >= V.size() || V[i + 1] == 0){
                return false;
            }
            V[i + 1]--;
        }
        V[0] = 0;
        sort(V.rbegin(), V.rend());
    }
    return true;
}
```

### 1.1.2. 并查集

```C++
class Set{
public:
    Set();
    Set *findSet();
    void unionSet(Set *x);
private:
    void link(Set *x);
    Set *parent;
    int rank;
};

Set::Set(){
    parent = this;
    rank = 0;
}

Set *Set::findSet(){
    if(parent != this){
        parent = parent->findSet();
    }
    return parent;
}

void Set::unionSet(Set *x){
    findSet();
    link(x->findSet());
}

void Set::link(Set *x){
    if(parent->rank > x->rank){
        x->parent = parent;
    }
    else{
        parent->parent = x;
        if(x->rank == parent->rank)
            x->rank++;
    }
}
```

# 2. C++ 标准库

## 2.1. \<algorithm\>

```C++
// 不修改序列
int count(beg, end, val);
int count_if(beg, end, unary);
it find(beg, end, val);
it find_if(beg, end, unary);
it find_if_not(beg, end, unary);
// 修改序列
void fill(beg, end, val);
void transform(i_beg, i_end, o_beg, unary);
void transform(i_beg_1, i_end_1, i_beg_2, o_beg, binary);
void remove(beg, end, val);
void remove_if(beg, end, unary);
void replace(beg, end, old_val, new_val);
void replace_if(beg, end, unary, new_val);
void reverse(beg, end);
void rotate(beg, new_beg, end);
void unique(beg, end [, binary]);
// 划分
bool is_partitioned(beg, end, unary);
it partition(beg, end, unary);
it stabe_partition(beg, end, unary);
it partition_point(beg, end, unary);
// 排序
bool is_sorted(beg, end [, binary]);
it is_sorted_until(beg, end [, binary]);
void sort(beg, end [, binary]);
void partial_sort(beg, mid, end [, binary]);
void stable_sort(beg, end [, binary]);
// 二分查找
it lower_bound(beg, end, [val|binary]);
it upper_bound(beg, end, [val|binary]);
bool binary_search(beg, end, val [, binary]);
// 归并
o_end merge(i_beg_1, i_end_1, i_beg_2, i_end_2, o_beg [, binary]);
void inplace_merge(beg, mid, end [, binary]);
// 集合
bool includes(beg_1, end_1, beg_2, end_2 [, binary]); // B \in A
o_end set_difference(i_beg_1, i_end_1, i_beg_2, i_end_2, o_beg [, binary]); // A - B
o_end set_intersection(i_beg_1, i_end_1, i_beg_2, i_end_2, o_beg [, binary]); // A * B
o_end set_symmetric_difference(i_beg_1, i_end_1, i_beg_2, i_end_2, o_beg [, binary]); // A ^ B
o_end set_union(i_beg_1, i_end_1, i_beg_2, i_end_2, o_beg [, binary]); // A + B
// 堆
bool is_heap(beg, end [, binary]);
it is_heap_until(beg, end [, binary]);
void make_heap(beg, end [, binary]);
void push_heap(beg, end [, binary]); // push end
void pop_heap(beg, end [, binary]); // pop end
void sort_heap(beg, end [, binary]); // heap -> sorted
// 最值
M max(a, b [, binary]);
it max_element(beg, end [, binary]);
m min(a, b [, binary]);
it min_element(beg, end [, binary]);
{m, M} minmax(a, b [, binary]);
{m_it, M_it} minmax_element(beg, end [, binary]);
// 相等
bool equal(beg_1, end_1, beg_2 [, end_2][, binary]);
bool lexicographical_compare(beg_1, end_1, beg_2, end_2 [, binary]); // a < b
// 排列
bool ispermutation(beg_1, end_1, beg_2 [, end_2][, binary]); // 1A2
bool next_permutation(beg, end [, binary]);
bool prev_permutation(beg, end [, binary]);
// 数值
T accumulate(beg, end, init [, binary]); // init + \sum_{beg}^{end}
o_end partial_sun(i_beg, i_end, o_beg [, binary]);
T inner_product(i_beg_1, i_end_1, i_beg_2, init [, binary1, binary2]); // init + \sum_{beg}^{end} (a_i * b_i)
o_end adjacent_difference(i_beg, i_end, o_beg [, binary]);
```

## 2.2. \<cmath\>

```c++
// 基本
double abs(double x);	// |x|
// 指数
double exp(double x);	// e^x
double exp2(double x);	// 2^x
double expm1(double x);	// e^x - 1
double log(double x);	// \ln x
double log10(double x);	// \lg x
double log2(double x);	// \log_2 x
double log1p(double x);	// \ln (1 + x)
// 幂
double pow(double x, double y);	// x^y
double sqrt(double x);	// \sqrt x
double cbrt(double x);	// \sqrt[3] x
double hypot(double x, double y);	// \sqrt (x^2 + y^2)
// 三角
double sin(double x);	// \sin x
double cos(double x);	// \cos x
double tan(double x);	// \tan x
double asin(double x);	// \arcsin x
double acos(double x);	// \arccos x
double atan(double x);	// \arctan x
// 舍入
double ceil(double x);	// 向上取整
double floor(double x);	// 向下取整
double trunc(double x);	// 向零取整
double round(double x);	// 四舍五入
```

## 2.3. \<cstdlib\>

```C++
/*
 * char[] -> int
 */
int atoi(char *str);
/*
 * 随机数 \in [0,RAND_MAX)
 */
int rand();
void srand(/* time(nullptr) #include <ctime> */); 
```

## 2.4. \<iomanip\>

- `setbase`：整数基数
- `setfill`：填充字符
- `setprecision`：浮点精度
- `setw`：域宽
- `quote`：内嵌空格字符串
- `ws`：消耗空白符
- `boolalpha`、`noboolalpha`：布尔文本/数值
- `showbase`、`noshowbase`：基数前缀
- `showpoint`、`noshowpoint`：始终包含小数
- `showpos`、`noshowpos`：`+`号
- `skipws`、`noskipws`：跳过前导空白
- `uppercase`、`nouppercase`：大写
- `internal`、`left`、`right`：填充布局
- `dec`、`hex`、`oct`：基数
- `fixed`、`scientific`：格式化

## 2.5. Lambda

```C++
[](int a, int b){return a < b;}
```

## 2.6. \<numeric\>

```c++
int gcd(int a, int b);	// 最大公因数
int lcm(int a, int b);	// 最小公倍数
```

## 2.7. \<string\>

```C++
/*
 * string -> int
 * str： 要转换的字符串
 * pos： 存储已处理字符数的整数的地址
 * base： 数的底
 */
int stoi(string str, size_t pos = 0, base = 10);
```

# 3. Java 大数

```Java
import java.math.BigDecimal;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner kb = new Scanner(System.in);
        while(kb.hasNext()){
            BigDecimal a = kb.nextBigDecimal();
            BigDecimal b = kb.nextBigDecimal();
            BigDecimal sum = a.add(b);
            System.out.println(sum.toString());
        }
        kb.close();
    }
}
```

---

```Java
class BigDecimal{
    // static member
    public static final BigDecimal ZERO;
    public static final BigDecimal ONE;
    public static final BigDecimal TEN;
    public static final int ROUND_UP;
    public static final int ROUND_DOWN;
    public static final int ROUND_CEILING;
    public static final int ROUND_FLOOR;
    public static final int ROUND_HALF_UP;
    public static final int ROUND_HALF_DOWN;
    public static final int ROUND_HALF_EVEN;
    // public method
    public BigDecimal abs();
    public BigDecimal add(BigDecimal val);
    public int compareTo(BigDecimal val);
    public BigDecimal divide(BigDecimal val, int scale, int roundmode);
    public BigDecimal[] divideAndRemainder(BigDecimal val);
    public BigDecimal divideToIntegralValue(BigDecimal val);
    public float floatValue();
    public int intValue();
    public BigDecimal max(BigDecimal val);
    public BigDecimal min(BigDecimal val);
    public BigDecimal movePointLeft(int n);
    public BigDecimal movePointRight(int n);
    public BigDecimal multiply(BigDecimal val);
    public BigDecimal negate();
    public BigDecimal pow(int n);
    public BigDecimal remainder(BigDecimal val);
    public BigDecimal stripTrailingZeros();
    public BigDecimal subtract(BigDecimal val);
    public String toEngineeringString();
    public String toPlainString();
    public String toString();
}
```
