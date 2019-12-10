function OneEditApart(string_left, string_right) {
    let long_String = "";
    let short_String = "";

    if (string_left.length > string_right.length) {
        long_String = string_left;
        short_String = string_right;
    } else {
        long_String = string_right;
        short_String = string_left;
    }

    if (long_String.length - short_String.length >= 2) {
        return false;
    }

    let count = 0;
    let i = 0;
    let a = 0;

    while (i < long_String.length && a < short_String.length) {
        if (long_String[i] === short_String[a]) {
            i++;
            a++;
            continue;
        } else {
            count++;
            if (count > 1) {
                return false;
            }

            if (long_String.length != short_String.length) {
                i++;
            } else {
                i++;
                a++;
            }
        }
    }
    return true;
}

console.log(OneEditApart("cat", "dog"));
console.log(OneEditApart("cat", "cats"));
console.log(OneEditApart("cat", "dogs"));
console.log(OneEditApart("cat", "cast"));
console.log(OneEditApart("cast", "cat"));
console.log(OneEditApart("at", "cat"));
console.log(OneEditApart("", "acts"));
