outer: for (var i = 2; i <= 10; i++) {
    
    for (var z = 2; z < i; z++) {
        if (i % z == 0) continue outer;
    }
    
    alert(i);
}