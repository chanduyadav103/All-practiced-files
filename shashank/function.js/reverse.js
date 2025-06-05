let i = 0
function reverseName(name) {

    let index = name.length - 1 - i
    if (index >= 0) {
        console.log(name[index])
        i = i + 1
        reverseName(name)
    }
}
reverseName("shashank")

