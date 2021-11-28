function ColorToHex(color) {
    const hexadecimal = (+color).toString(16);
    return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
}

export const convertColorToHex = (rgbObject) => {
    const rgbArray = rgbObject.match(/\d+/g);
    const r = rgbArray[0]
    const g = rgbArray[1]
    const  b = rgbArray[2]

    return "#" + ColorToHex(r) + ColorToHex(g) + ColorToHex(b);
}

export function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

