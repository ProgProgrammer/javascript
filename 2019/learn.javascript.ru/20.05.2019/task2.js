function sumTo(n) {
    if (n == 0) {
        return 1;
    } else {
        return n + sumTo(n-1);
    }
}

alert(sumTo(100));