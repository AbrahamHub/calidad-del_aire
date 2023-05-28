function displayLetters(pos) {
    const letterGroups = [['N', 'X', 'G', 'C'], ['P', 'J', 'A', 'D'], ['H', 'Y', 'I', 'Z'], ['O', 'Q', 'T', 'B'], ['K', 'V', 'E', 'U'], ['M', 'S', 'W'], ['R', 'F', 'L']];
    var letterGroup = letterGroups[pos]; // Example letter group
    var letterGroupContainer = document.getElementById('letterGroupContainer');
    letterGroupContainer.textContent = letterGroup.join(', ');
}

function displayLetters2(pos1, pos2) {
    const letterGroups = [['B', 'G'], ['Q', 'Y'], ['J', 'D'], ['S', 'V'], ['C', 'M'], ['N', 'Z'], ['H', 'R'], ['E', 'P'], ['O', 'X'], ['T', 'L'], ['K', 'U'], ['A', 'F'], ['I', 'W'], ['   ']];
    var letterGroup = letterGroups[pos1]; // Example letter group
    var letterGroup2 = letterGroups[pos2];
    var letterGroupContainer = document.getElementById('letterGroupContainer2');
    letterGroupContainer.textContent = letterGroup.join(', ');
    var letterGroupContainer2 = document.getElementById('letterGroupContainer3');
    letterGroupContainer2.textContent = letterGroup2.join(', ');

}