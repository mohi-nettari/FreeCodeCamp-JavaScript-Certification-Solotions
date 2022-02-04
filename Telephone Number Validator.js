function telephoneCheck(str) {
    let length = 0;
    if (str.length == 10) {
        for (let i = 0; i < str.length; i++) {
            let s = parseInt(str[i]);
            if (isNaN(s)) {
                return false;
            }else {
                return true;
            }
        }
    }
    else {
        for (let i = 0; i < str.length; i++) {
            // the first type

            if (str[i] == '1') {
                str[i + 1] == ' ' ? i += 2 : i += 1;

                if (str[i] == '(') {
                    var isRow = true;
                    for (var j = i + 1; j < i + 4; j++) {
                        let s = parseInt(str[j]);
                        if (isNaN(s)) {
                            return false;
                        }
                        else {
                            length++;
                        }
                    }
                } else if (!isNaN(parseInt(str[i]))) {
                    for (var j = i; j < i + 3; j++) {
                        let s = parseInt(str[j]);
                        if (isNaN(s)) {
                            return false;
                        }
                        else {
                            length++;
                        }
                    }
                } else {
                    return false;
                }
                i = j;
                if (isRow) {
                    if (str[i] !== ')') {
                        return false;
                    } else {
                        i++;
                    }
                }
                // the second check
                if (str[i] == '-' || str[i] == ' ') {
                    for (var j = i + 1; j < i + 4; j++) {
                        let s = parseInt(str[j]);
                        if (isNaN(s)) {
                            return false;
                        }
                        else {
                            length++;
                        }
                    }
                } else if (!isNaN(parseInt(str[i]))) {
                    for (var j = i; j < i + 3; j++) {

                        let s = parseInt(str[j]);
                        if (isNaN(s)) {
                            return false;
                        }
                        else {
                            length++;
                        }
                    }
                } else {
                    return false;

                }
                //the third check
                i = j;
                if (str[i] == '-' || str[i] == ' ') {
                    for (var j = i + 1; j < i + 5; j++) {
                        let s = parseInt(str[j]);
                        if (isNaN(s)) {
                            return false;
                        }
                        else {
                            length++;
                        }
                    }
                } else if (!isNaN(parseInt(str[i]))) {
                    for (var j = i; j < i + 4; j++) {
                        let s = parseInt(str[j]);
                        if (isNaN(s)) {
                            return false;
                        }
                        else {
                            length++;
                        }
                    }
                } else {
                    return false;

                }
                // checking length==10
                if (length == 10) {
                    return true;
                }
            }



            // the second type
            else if (str[i] == "(") {
                // the first check
                for (var j = i + 1; j < i + 4; j++) {
                    let s = parseInt(str[j]);
                    if (isNaN(s)) {
                        return false;
                    }
                    else {
                        length++;
                    }
                }
                i = j;
                if (str[i] !== ')') {
                    return false;
                } else {
                    i++;
                }


                // the second check
                if (str[i] == '-' || str[i] == ' ') {
                    for (var j = i + 1; j < i + 4; j++) {
                        let s = parseInt(str[j]);
                        if (isNaN(s)) {
                            return false;
                        }
                        else {
                            length++;
                        }
                    }
                } else if (!isNaN(parseInt(str[i]))) {
                    for (var j = i; j < i + 3; j++) {
                        let s = parseInt(str[j]);
                        if (isNaN(s)) {
                            return false;
                        }
                        else {
                            length++;
                        }
                    }
                } else {
                    return false;

                }

                // the third check
                i = j;
                if (str[i] == '-' || str[i] == ' ') {
                    for (var j = i + 1; j < i + 5; j++) {
                        let s = parseInt(str[j]);
                        if (isNaN(s)) {
                            return false;
                        }
                        else {
                            length++;
                        }
                    }
                } else if (!isNaN(parseInt(str[i]))) {
                    for (var j = i; j < i + 3; j++) {
                        let s = parseInt(str[j]);
                        if (isNaN(s)) {
                            return false;
                        }
                        else {
                            length++;
                        }
                    }
                } else {
                    return false;

                }
                // checking length==10
                console.log(length);
                if (length == 10) {
                    return true;
                }
            }


            // ----------------------third type
            else if (str.length == 12) {
                for (var j = i; j < i + 3; j++) {
                    let s = parseInt(str[j]);
                    if (isNaN(s)) {
                        return false;
                    }
                    else {
                        length++;
                    }
                }
                i = j;

                // the second check
                if (str[i] == '-' || str[i] == ' ') {
                    for (var j = i + 1; j < i + 4; j++) {
                        let s = parseInt(str[j]);
                        if (isNaN(s)) {
                            return false;
                        }
                        else {
                            length++;
                        }
                    }
                } else if (!isNaN(parseInt(str[i]))) {
                    for (var j = i; j < i + 3; j++) {
                        let s = parseInt(str[j]);
                        if (isNaN(s)) {
                            return false;
                        }
                        else {
                            length++;
                        }
                    }
                } else {
                    return false;

                }

                // the third check
                i = j;
                if (str[i] == '-' || str[i] == ' ') {
                    for (var j = i + 1; j < i + 5; j++) {
                        let s = parseInt(str[j]);
                        if (isNaN(s)) {
                            return false;
                        }
                        else {
                            length++;
                        }
                    }
                } else if (!isNaN(parseInt(str[i]))) {
                    for (var j = i; j < i + 3; j++) {
                        let s = parseInt(str[j]);
                        if (isNaN(s)) {
                            return false;
                        }
                        else {
                            length++;
                        }
                    }
                } else {
                    return false;

                }
                // checking length==10

                if (length == 10) {
                    return true;
                }
            }
            // forth check
            else {
                return false;
            }

        }
    }
}