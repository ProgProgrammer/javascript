function OneEditApart(...args) {
    const main_object = {};
    main_object.array_main = [[], []];
    main_object.array_numbers = [];
    //main_object.i = [];
    main_object.i = 0;
    main_object.a = 0;
    main_object.run = 0;
    main_object.letter = "";
    main_object.dissimilarity = 0;
    main_object.not_similarity = 0;
    main_object.string_check = "";

    for (let i = 0; i < args.length; i++) {
        for (let a = 0; a < args[i].length; a++) {
            main_object.array_main[i][a] = args[i][a];
        }
    }

    if (main_object.array_main[0].length >= main_object.array_main[1].length) {
        main_object.max_i = 0;
        main_object.min_i = 1;

    } else if (main_object.array_main[0].length < main_object.array_main[1].length) {
        main_object.max_i = 1;
        main_object.min_i = 0;
    }

    if (main_object.max_i.length - 1 > main_object.min_i.length) {
        return false;
    }

    for (let i = 0; i < main_object.array_main[main_object.max_i].length; i++) {
        if (main_object.array_main[main_object.max_i].length > main_object.array_main[main_object.min_i].length) {
            i += main_object.run;
            if (main_object.array_main[main_object.max_i][i] !== main_object.array_main[main_object.min_i][main_object.a]) {
                main_object.run++;
                main_object.i = i;
                if (main_object.max_i === 1) {
                    main_object.letter = main_object.array_main[main_object.max_i][i];
                    console.log(main_object.array_main[main_object.max_i][i]);
                    console.log(main_object.letter);
                } else {
                    main_object.letter = main_object.array_main[main_object.min_i][i];
                    console.log(main_object.array_main[main_object.min_i][i]);
                    console.log(main_object.letter);
                }
            }
        } else {
            if (main_object.array_main[main_object.max_i][i] !== main_object.array_main[main_object.min_i][main_object.a]) {
                main_object.run++;
                main_object.i = i;
                if (main_object.max_i === 1) {
                    main_object.letter = main_object.array_main[main_object.max_i][i];
                    console.log(main_object.array_main[main_object.max_i][i]);
                    console.log(main_object.letter);
                } else {
                    main_object.letter = main_object.array_main[main_object.min_i][i];
                    console.log(main_object.array_main[main_object.min_i][i]);
                    console.log(main_object.letter);
                }
            }
        }

        main_object.a++;
        console.log(main_object.a);
        console.log(i);
        console.log(main_object.run);
        console.log(main_object.letter);

        if (main_object.run > 1) {
            return false;
        }
    }

    /*for (let i = 0; i < main_object.array_main[main_object.min_i].length; i++) {
        for (let a = 0; a < main_object.array_main[main_object.max_i].length; a++) {
            if (main_object.array_main[main_object.min_i][i] === main_object.array_main[main_object.max_i][a]) {
                main_object.not_similarity++;
                main_object.i[i] = a;
            }
        }
    }

    if (main_object.not_similarity <= main_object.array_main[main_object.max_i].length - 2) {
        main_object.not_similarity = 0;
        return false;
    }

    main_object.not_similarity = 0;

    for (let i = 0; i < main_object.array_main[main_object.max_i].length; i++) {
        if (i !== main_object.i[i] && main_object.dissimilarity === 0) {
            main_object.dissimilarity++;
            main_object.string = main_object.array_main[main_object.max_i][i];
            main_object.index = i;
        }
    }*/

    if (main_object.max_i === 1) {
        for (let a = main_object.array_main[main_object.max_i].length - 1; a >= main_object.index; a--) {
            if (a === main_object.index) {
                main_object.array_main[main_object.min_i][a] = main_object.string;

            } else {
                main_object.array_main[main_object.min_i][a] = main_object.array_main[main_object.max_i][a];
            }

        }

        for (let i = 0; i < main_object.array_main[main_object.min_i].length; i++) {
            main_object.string_check += main_object.array_main[main_object.min_i][i];
        }

    } else if (main_object.max_i === 0) {
        main_object.array_main[main_object.max_i].splice(main_object.index, 1);

        for (let i = 0; i < main_object.array_main[main_object.max_i].length; i++) {
            main_object.string_check += main_object.array_main[main_object.max_i][i];
        }
    }

    if (main_object.string_check === args[1]) {
        return true;
    } else {
        return false;
    }

}

console.log(OneEditApart("cat", "dog"));
console.log(OneEditApart("cat", "cats"));
console.log(OneEditApart("cat", "dogs"));
console.log(OneEditApart("cat", "cast"));
console.log(OneEditApart("cast", "cat"));
console.log(OneEditApart("at", "cat"));
console.log(OneEditApart("", "acts"));
