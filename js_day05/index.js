function $(tag, index) {
    var eles = document.getElementsByTagName(tag);
    if (index){ // index不为0,undefined
        return eles[index]
    }
    return eles[0];
}